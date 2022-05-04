<template>
  <div class="el-image">
    <img
      ref="imgRef"
      :style="imgStyle"
      class="el-image__inner"
      @load="loadingVisible"
      @error="loadError"
    />
    <span class="el-image__loading" v-if="textVisible">loading</span>
  </div>
</template>

<script>
import { debounce } from 'lodash'
export default {
  name: 'ElImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    fit: {
      type: String,
      default: '',
    },
    width: String,
    height: String,
  },
  data() {
    return {
      textVisible: true,
      imgStyle: {
        'object-fit': this.fit,
        width: this.width,
        height: this.height,
      },
    }
  },
  mounted() {
    this.lazy()
    window.addEventListener('scroll', debounce(this.lazy, 200))
  },
  methods: {
    loadingVisible() {
      this.textVisible = false
    },
    loadError() {
      this.$emit('error')
    },
    lazy() {
      if (
        this.$refs.imgRef?.getBoundingClientRect().top <
          document.documentElement.clientHeight &&
        this.$refs.imgRef.getBoundingClientRect().top +
          this.$refs.imgRef.height >
          0
      ) {
        this.$refs.imgRef.src = this.src
        window.removeEventListener('scroll', debounce(this.lazy, 200))
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', debounce(this.lazy, 200))
  },
}
</script>

<style lang="less" scoped>
.el-image {
  display: inline-block;
  position: relative;
  &__inner {
    width: 100%;
    height: 100%;
  }
  &__loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>