<template>
  <div id="mask" :style="{ 'z-index': zIndex }" class="mask"></div>
</template>
<script>
import { getCurrent } from '@/utils/zIndex.js'
export default {
  name: 'ElMask',
  data() {
    return {
      zIndex: getCurrent() - 1,
    }
  },
  mounted() {
    document.querySelector('body')?.appendChild(this.$el)
    this.$EventBus.$on('open', this.update)
    this.$EventBus.$on('close', this.update)
  },
  methods: {
    getCurrent,
    update() {
      this.zIndex = getCurrent() - 1
    },
  },
  beforeDestroy() {
    this.$EventBus.$off('open', this.update)
    this.$EventBus.$off('close', this.update)
  },
}
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: black;
}
</style>