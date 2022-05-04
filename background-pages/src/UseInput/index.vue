<template>
  <form class="form">
    <FormItem title="文本：">
      <ElInput v-model="inputValue" placeholder="请输入" />
      <p>
        <span>{{ inputValue }}</span>
      </p>
    </FormItem>
    <FormItem title="仅文本：">
      <span>{{ spanValue }}</span>
    </FormItem>
    <!-- text和同行第二个 -->
    <FormItem title="text：">
      <ElInput v-model="inputValueA" />
      <span>同行的第二个：</span>
      <ElInput v-model="inputValueB" />
      <p>
        <span>{{ inputValueA }}</span> <span>{{ inputValueB }}</span>
      </p>
    </FormItem>
    <!-- 复选框  -->
    <FormItem title="复选框：">
      <label v-for="(item, index) in checkboxGroup" :key="index">
        <ElInput
          type="checkbox"
          v-model="item.checked"
          :disabled="item.disable"
        />{{ item.label }}
      </label>
      <p>
        <span>{{ checkboxGroup }}</span>
      </p>
    </FormItem>
    <!-- 单选按钮 -->
    <FormItem title="单选按钮：">
      <label v-for="(item, index) in radioGroup" :key="index">
        <ElInput
          type="radio"
          v-model="radioValue"
          :itemValue="item.value"
          :name="item.name"
        />{{ item.label }}
      </label>
      <p>
        <span>{{ radioValue }}</span>
      </p>
    </FormItem>
    <!-- 两个个文本框   -->
    <FormItem title="两个文本框：">
      <ElInput v-model="twoInputArr[0]" />
      <ElInput v-model="twoInputArr[1]" />
      <p>
        <span>{{ twoInputArr }}</span>
      </p>
    </FormItem>
    <!-- 三个文本框   -->
    <FormItem title="三个文本框：">
      <ElInput
        v-for="(item, index) in threeInputArr"
        :key="index"
        v-model="threeInputArr[index]"
      />
      <p>
        <span>{{ threeInputArr }}</span>
      </p>
    </FormItem>
    <!-- 下拉框  -->
    <FormItem title="下拉框：">
      <ElInput type="select" :options="options" v-model="selectValueA">
      </ElInput>
      <ElInput type="select" :options="optionsB" v-model="selectValueB">
      </ElInput>
      <p>
        <span>{{ selectValueA }}</span>
        <span>{{ selectValueB }}</span>
      </p>
    </FormItem>
    <!-- 文本框 -->
    <FormItem title="文本框：">
      <ElInput
        type="textarea"
        placeholder="初始化..."
        v-model="textValue"
        disabled
      />
      <p>{{ textValue }}</p>
    </FormItem>
  </form>
</template>

<script>
import ElInput from '@/UseInput/ElInput'
import FormItem from '@/UseInput/FormItem'
import { getRadioGroup, getOptions, getCheckboxGroup } from '@/utils/formData'
export default {
  name: 'UseInput',
  components: {
    ElInput,
    FormItem,
  },
  data() {
    return {
      spanValue:
        '一大波文字，一大波文字一大波文字一大波文字一大波文字一大波文字一大波文字一大波文字一大波文字一大波文字',
      inputValue: '',
      inputValueA: '',
      inputValueB: '',
      checkboxGroup: getCheckboxGroup(5),
      radioGroup: getRadioGroup(4),
      radioValue: '',
      selectValueA: '1',
      selectValueB: '4',
      textValue: '',
      twoInputArr: ['', ''],
      threeInputArr: ['', '', ''],
      options: getOptions(true),
      optionsB: getOptions(),
    }
  },
}
</script>
<style lang="less" scoped>
form {
  box-shadow: 0 1px 3px rgba(0, 0, 0.3);
}
</style>