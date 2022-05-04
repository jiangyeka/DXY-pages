<template >
  <div class="list-wrapper">
    <Header @search="searchByKeyword" :keyword="searchParams.keyword" />
    <Body :dataList="showingItems" @remove="removeItem" @update="updateItem" />
    <Footer
      @prev="jumpToPrev"
      @next="jumpToNext"
      @jump="toTargetPage"
      :pageCount="pageCount"
      :currentPage="searchParams.currentPage"
      :totalCount="totalCount"
    />
    <Dialog
      :editItem="checkedUserItem"
      v-if="dialogVisible"
      content="更改名字为"
      @confirm="confirmUpdateItem"
      @cancel="cancelUpdateItem"
    />
  </div>
</template>

<script>
import Dialog from '@/SearchList/Dialog'
import Footer from '@/SearchList/Footer'
import Body from '@/SearchList/Body'
import Header from '@/SearchList/Header'
import { removeItem, updateItem, parseHash, getInfo } from '@/utils/data'
export default {
  name: 'SearchList',
  components: {
    Footer,
    Body,
    Header,
    Dialog,
  },
  data() {
    return {
      checkedUserItem: {},
      dialogVisible: false,
      searchParams: {
        pageSize: 4,
        currentPage: 1,
        keyword: '',
      },
      showingItems: [],
      pageCount: 0,
      totalCount: 0,
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      const hashInfo = parseHash(window.location.hash)
      this.searchParams.keyword = hashInfo.keyword || ''
      this.searchParams.currentPage = parseInt(hashInfo.currentPage) || 1
      const res = getInfo(this.searchParams)
      this.showingItems = res.showingItems
      this.totalCount = res.totalCount
      this.pageCount = res.pageCount
      this.hashChange()
      this.updateHash()
    },
    updateHash() {
      window.location.hash = `/searchlist?keyword=${this.searchParams.keyword}&currentPage=${this.searchParams.currentPage}`
    },
    hashChange() {
      window.addEventListener(
        'hashchange',
        () => {
          const res = getInfo(this.searchParams)
          this.showingItems = res.showingItems
          this.totalCount = res.totalCount
          if (
            this.showingItems.length > 0 ||
            this.searchParams.currentPage === 1
          ) {
            this.pageCount = res.pageCount
          }
        },
        false
      )
    },
    searchByKeyword(value) {
      this.searchParams.keyword = value
      this.searchParams.currentPage = 1
      this.updateHash()
    },
    removeShowingItem(target) {
      const index = this.showingItems.findIndex((item) => item === target)
      this.showingItems.splice(index, 1)
    },
    removeItem(item) {
      removeItem(item)
      this.removeShowingItem(item)
      this.totalCount = getInfo(this.searchParams).totalCount
    },
    updateItem(item) {
      this.checkedUserItem = item
      this.dialogVisible = true
    },
    cancelUpdateItem() {
      this.dialogVisible = false
    },
    confirmUpdateItem(value) {
      const name = value.trim()
      if (name) {
        updateItem(name, this.checkedUserItem)
        this.dialogVisible = false
        const res = getInfo(this.searchParams)
        this.totalCount = res.totalCount
        this.showingItems = res.showingItems
        return
      }
      alert('输入正确字符串')
    },
    jumpToPrev() {
      this.searchParams.currentPage !== 1 && this.searchParams.currentPage--
      this.updateHash()
    },
    jumpToNext() {
      this.searchParams.currentPage < this.pageCount &&
        this.searchParams.currentPage++
      this.updateHash()
    },
    toTargetPage(value) {
      value = parseInt(value)
      if (value && value >= 1 && value <= this.pageCount) {
        this.searchParams.currentPage = value
        this.updateHash()
        return
      }
      alert('请输入正确页码')
    },
  },
}
</script>

<style lang="less" scoped>
.list-wrapper {
  width: 38%;
}
</style>