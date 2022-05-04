<template>
  <div
    class="el-modal__wrapper"
    :style="{ 'z-index': zNumber }"
    @click.self="closeModal"
    v-if="visible"
  >
    <div class="el-modal" :style="bodyStyle">
      <div class="el-modal__header">
        <slot name="header">{{ title }}</slot>
        <button @click="closeModal" class="el-modal__close">X</button>
      </div>
      <div class="el-modal__body">
        <slot></slot>
      </div>
      <div class="el-modal__footer">
        <slot name="footer">
          <button @click="cancel">确认</button>
          <button @click="confirm">取消</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrent, useCurrent, noUseCurrent } from '@/utils/zIndex.js'
export default {
  name: 'ElModal',
  model: {
    prop: 'visible',
    event: 'close',
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    width: String,
    height: String,
  },
  data() {
    return {
      bodyStyle: {
        width: this.width,
        height: this.height,
      },
    }
  },
  mounted() {
    if (this.appendToBody) {
      document.querySelector('body')?.appendChild(this.$el)
    }
  },
  methods: {
    closeModal() {
      this.$emit('close', false)
    },
    cancel() {
      this.$emit('cancel')
    },
    confirm() {
      this.$emit('confirm')
    },
  },
  computed: {
    zNumber() {
      return getCurrent()
    },
  },
  watch: {
    visible(val) {
      if (val) {
        useCurrent(2)
        this.$EventBus.$emit('open')
      } else {
        noUseCurrent(2)
        this.$EventBus.$emit('close')
      }
    },
  },
}
</script>
<style lang="less" scoped>
.el-modal__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  .el-modal {
    position: relative;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    margin: 15vh auto 50px;
    width: 50%;
    box-sizing: border-box;
    &__header {
      padding: 20px 20px 10px;
      text-align: start;
      display: flex;
      justify-content: space-between;
    }
    &__body {
      padding: 30px 20px;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
    }
  }
}

.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: ' ';
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>