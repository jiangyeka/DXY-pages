<template>
  <div class="item__wrapper">
    <div class="item__title">{{ title }}</div>
    <div class="item__content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'FormItem.',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="less" scoped>
.item__ {
  &wrapper {
    display: flex;
  }
  &title {
    flex: 0 0 200px;
    text-align: right;
  }
  &content {
    flex: 1;
    text-align: left;
  }
}
</style>

