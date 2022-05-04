<template>
  <div class="item__wrapper">
    <div class="item__title">
      <span v-if="required" class="item__required">*</span>{{ title }}
    </div>
    <div class="item__content">
      <slot></slot>
      <p class="item__errormsg">{{ errorMsg }}</p>
    </div>
    <div class="item__operate"><slot name="operate"></slot></div>
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
    value: { type: Object, default: () => {} },
    required: { type: Boolean, default: false },
  },
  data() {
    return { errorMsg: '' }
  },
  watch: {
    value: {
      handler(n) {
        if (n.value) this.errorMsg = ''
      },
      deep: true,
    },
  },
  mounted() {
    this.$EventBus.$on('validate', () => {
      if (this.required) {
        if (this.value.value) {
          this.errorMsg = ''
          return
        }
        this.errorMsg = this.value.message
      }
    })
  },
  beforeDestroy() {
    this.$EventBus.$off('validate')
  },
}
</script>
<style lang="less" scoped>
.item__ {
  &wrapper {
    display: flex;
  }
  &title {
    flex: 0 0 80px;
    text-align: right;
  }
  &required {
    color: red;
  }
  &content {
    flex: 1;
    text-align: left;
  }
  &errormsg {
    color: red;
  }
  &operate {
    flex: 0 0 70px;
  }
}
</style>

