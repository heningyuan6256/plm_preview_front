<template>
  <div class="img-wrap">
    <el-card>
      <img :src="url" />
    </el-card>
  </div>
</template>
<script>
export default {
  name: "ImageView",
  props: {
    url: {
      type: String,
      default: "",
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.img-wrap {
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
