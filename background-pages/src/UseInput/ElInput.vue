<template>
  <span>
    <input
      v-if="type == 'text' || type == 'radio' || type == 'checkbox'"
      v-bind="$attrs"
      v-on="$listeners"
      :type="type"
      :value="itemValue"
      v-model="inputValue"
      :name="name"
      @change="radioChange"
    />
    <textarea
      v-else-if="type === 'textarea'"
      v-bind="$attrs"
      v-on="$listeners"
      v-model="inputValue"
    />
    <select v-else v-model="inputValue" v-bind="$attrs" v-on="$listeners">
      <option v-for="item in options" :value="item.value" :key="item.text">
        {{ item.text }}
      </option>
    </select>
  </span>
</template>

<script>
export default {
  name: 'ElInput',
  model: {
    prop: 'value',
    event: 'changeValue',
  },
  props: {
    value: {
      type: [String, Boolean, Number],
      default: '',
    },
    itemValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
  },
  data() {
    return {
      inputValue: '',
    }
  },
  created() {
    this.inputValue = this.value
  },
  watch: {
    inputValue(val) {
      this.$emit('changeValue', val)
    },
  },
  methods: {
    radioChange() {
      if (this.type === 'radio') {
        this.$emit('changeValue', this.itemValue)
      }
    },
  },
}
</script>
