<template>
  <div class="video-wrap">
    <el-card>
      <video
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        autoplay="muted"
        preload="auto"
      >
        <source :src="url" />
      </video>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "VideoView",
  components: {},
  props: {
    url: {
      type: String,
      default: "",
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.video-wrap {
  width: 100%;
  .video-js {
    width: 100%;
    height: calc(100vh - 150px);
  }
}
</style>
