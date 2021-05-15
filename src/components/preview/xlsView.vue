<template>
  <div class="xls-wrap">
    <el-card>
      <iframe class="xls" :src="url">
        <p>您的浏览器不支持 iframe 标签。</p>
      </iframe>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "XlsView",
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
.xls-wrap {
  width: 100%;
  .xls {
    width: 100%;
    height: calc(100vh - 150px);
  }
}
</style>
