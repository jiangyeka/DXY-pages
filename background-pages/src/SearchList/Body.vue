<template>
  <div>
    <table>
      <tr>
        <th>
          <input type="checkbox" v-if="dataList.length" v-model="checked" />
        </th>
        <th>Index</th>
        <th>ID</th>
        <th>Name</th>
        <th>Profession</th>
        <th>操作</th>
      </tr>

      <tr v-for="(item, index) in dataList" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.checked" />
        </td>
        <td>{{ index }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.profession }}</td>
        <td>
          <button @click="updateItem(item)">编辑</button
          ><button @click="removeItem(item)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SearchListBody',
  components: {},
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeItem(item) {
      this.$emit('remove', item)
    },
    updateItem(item) {
      this.$emit('update', item)
    },
  },
  computed: {
    checked: {
      get() {
        return this.dataList?.every((item) => item.checked === true)
      },
      set(val) {
        this.dataList.forEach((item) => (item.checked = val))
      },
    },
  },
}
</script>
