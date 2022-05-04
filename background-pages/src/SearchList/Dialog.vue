<template>
  <div class="dialog-wrapper">
    <div>
      <strong>{{ content }}</strong>
    </div>
    <input type="text" v-model="inputName" />
    <div>
      <button @click="cancelUpdateItem">取消</button>
      <button @click="confirmUpdateItem">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchListDialog',
  data() {
    return {
      inputName: '',
    }
  },
  props: {
    content: {
      type: String,
      default: '',
    },
    editItem: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.inputName = this.editItem.name
  },
  methods: {
    cancelUpdateItem() {
      this.$emit('cancel')
    },
    confirmUpdateItem() {
      this.$emit('confirm', this.inputName)
      this.inputName = ''
    },
  },
}
</script>

<style scoped>
.dialog-wrapper {
  position: relative;
  top: 100px;
}
</style>