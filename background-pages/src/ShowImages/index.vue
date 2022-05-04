<template>
  <div class="demo-image">
    <div :key="index" v-for="(fit, index) in fits" class="image__wrapper">
      <span>{{ fit }}</span>
      <ElImage
        :src="url"
        :fit="fit"
        width="100px"
        height="100px"
        @error="handleError"
      />
    </div>
    <div class="img-list__wrapper">
      <div class="img-item" v-for="(item, index) in urlList" :key="index">
        <ElImage :src="item.url" height="200px" />
      </div>
    </div>
  </div>
</template>

<script>
import ElImage from '@/ShowImages/ElImage'
import { getImageList } from '@/utils/image'
export default {
  name: 'ShowImages',
  components: { ElImage },
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      urlList: getImageList(),
    }
  },
  methods: {
    handleError() {
      console.log('error')
    },
  },
}
</script>
<style lang="less" scoped>
.demo-image {
  width: 533px;
  height: 201px;
  .image__wrapper {
    display: inline-block;
    width: 20%;
    padding: 30px 0;
    border: 1px solid #eff2f6;
    box-sizing: border-box;
    vertical-align: top;
    height: 201px;
  }
}
</style>