<template>
  <div class="form">
    <FormItem title="标题" required :value="formData.title">
      <input type="text" v-model="formData.title.value" />
    </FormItem>
    <FormItem title="类型" required :value="formData.axisType">
      <label>
        <input
          value="horizontal"
          name="axis"
          v-model="formData.axisType.value"
          type="radio"
        />
        横轴
      </label>
      <label>
        <input
          value="vertical"
          name="axis"
          v-model="formData.axisType.value"
          type="radio"
        />
        纵轴
      </label>
    </FormItem>
    <ul>
      <li>
        <FormItem
          :title="`时间节点${index + 1}`"
          v-for="(item, index) in formData.timeNodeList"
          :key="index"
          class="form-node__wrapper"
        >
          <div class="form-node">
            <FormItem title="时间" :value="item.date" required>
              <input type="text" v-model="item.date.value" />
            </FormItem>
            <FormItem title="内容" :value="item.content" required>
              <input type="text" v-model="item.content.value" />
            </FormItem>
            <FormItem title="链接">
              <input type="text" v-model="item.link.value" />
            </FormItem>
          </div>
          <template slot="operate">
            <button @click="deleteNode(index)">删除</button>
            <button
              v-if="getMoveBtnVisible('up', index)"
              @click="moveUpNode(index)"
            >
              上移
            </button>
            <button
              v-if="getMoveBtnVisible('down', index)"
              @click="moveDownNode(index)"
            >
              下移
            </button>
          </template>
        </FormItem>
      </li>
      <p><button @click="createFormNode">➕ 增加节点</button></p>
    </ul>
    <div>
      <button @click="create">立即创建</button>
      <button @click="resetForm">重置</button>
    </div>
  </div>
</template>

<script>
import FormItem from '@/DynamicForm/FormItem'
export default {
  name: 'DynamicForm',
  data() {
    return {
      formData: {},
    }
  },
  created() {
    this.formData = this.getInitialFormData()
  },
  components: {
    FormItem,
  },
  methods: {
    getInitialFormData() {
      return {
        title: { value: '', message: '标题不能为空' },
        axisType: { value: '', message: '类型不能为空' },
        timeNodeList: [],
      }
    },
    createFormNode() {
      this.formData.timeNodeList.push({
        date: { value: '', message: '节点时间不能为空' },
        content: { value: '', message: '节点内容不能为空' },
        link: { value: '', message: '' },
      })
    },
    create() {
      this.$EventBus.$emit('validate')
      console.log(this.formData)
    },
    resetForm() {
      this.formData = this.getInitialFormData()
    },
    swapNodesPosition(list, source, target) {
      const tmp = list[source]
      this.$set(list, source, list[target])
      this.$set(list, target, tmp)
    },
    moveUpNode(index) {
      this.swapNodesPosition(this.formData.timeNodeList, index, index - 1)
    },
    moveDownNode(index) {
      this.swapNodesPosition(this.formData.timeNodeList, index, index + 1)
    },
    deleteNode(index) {
      this.formData.timeNodeList.splice(index, 1)
    },
    getMoveBtnVisible(type, index) {
      if (type === 'up') {
        if (index === 0) return false
        return true
      } else if (type === 'down') {
        if (index === this.formData.timeNodeList.length - 1) return false
        return true
      }
    },
  },
}
</script>

<style lang="less" scoped>
.form {
  width: 100%;
  &-node__wrapper {
    border: 1px solid #eaeefb;
    width: 50%;
  }
  &-node {
    border: 1px solid #eaeefb;
  }
  .item__wrapper {
    margin-bottom: 10px;
    margin-top: 10px;
  }
}
</style>