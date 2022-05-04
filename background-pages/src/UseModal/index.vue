<template>
  <div class="main">
    <button @click="modalAVisible = true">showModalA</button>
    <ElMask v-if="modalAVisible" />
    <ElModal
      v-model="modalAVisible"
      title="ModalA"
      @cancel="modalAVisible = false"
      @confirm="modalAVisible = false"
    >
      <button @click="modalBVisible = true">showModalB</button>
    </ElModal>
    <ElModal v-model="modalBVisible" width="200px" title="ModalB" appendToBody>
      <button @click="modalCVisible = true">showModalC</button>
    </ElModal>
    <ElModal v-model="modalCVisible" width="100px" title="ModalC" appendToBody>
    </ElModal>
    <video controls :class="{ video__full: isVideoFull }" width="250">
      <source
        src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"
        type="video/webm"
        ref="videoRef"
      />
    </video>
    <button @click="isVideoFull = true">全屏</button>
    <button @click="isVideoFull = false">取消全屏</button>
  </div>
</template>
<script>
import ElModal from '@/UseModal/ElModal'
import ElMask from '@/UseModal/ElMask'
export default {
  name: 'UseModal',
  components: {
    ElModal,
    ElMask,
  },
  data() {
    return {
      modalAVisible: false,
      modalBVisible: false,
      modalCVisible: false,
      videoSrc: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
      isVideoFull: false,
    }
  },
}
</script>
<style lang="less" scoped>
.video__full {
  width: 1660px;
  height: 900px;
}
</style>