<template>
  <div>
    <span>共{{ totalCount }}条</span>
    <button @click="jumpToPrev">prev</button>
    <span>{{ currentPage }}/{{ pageCount }}</span>
    <button @click="jumpToNext">next</button>
    <input v-model="targetPage" type="text" />
    <button @click="toTargetPage">Go</button>
  </div>
</template>

<script>
export default {
  name: 'SearchListFooter',
  props: {
    totalCount: { type: Number, default: 0 },
    pageCount: { type: Number, default: 1 },
    currentPage: { type: Number, default: 1 },
  },
  data() {
    return {
      targetPage: '',
    }
  },
  methods: {
    jumpToPrev() {
      this.$emit('prev')
    },
    jumpToNext() {
      this.$emit('next')
    },
    toTargetPage() {
      this.$emit('jump', this.targetPage)
      this.targetPage = ''
    },
  },
}
</script>
