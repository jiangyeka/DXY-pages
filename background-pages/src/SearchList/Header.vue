<template>
  <div>
    <input
      type="text"
      v-model="searchKeyword"
      @keypress.enter="updateListByKeyword"
      autofocus
    />
    <button @click="updateListByKeyword">搜索</button>
  </div>
</template>

<script>
export default {
  name: 'SearchListHeader',
  props: {
    keyword: {
      type: String,
      default: '',
    },
  },
  created() {
    this.searchKeyword = this.keyword
  },
  methods: {
    updateListByKeyword() {
      this.$emit('search', this.searchKeyword)
    },
  },
}
</script>