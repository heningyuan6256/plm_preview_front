<template>
  <div class="pdf-wrap">
    <el-card>
      <pdf
        class="pdfStyle"
        v-for="i in numPages"
        :key="i"
        :src="url"
        :page="i"
      ></pdf>
    </el-card>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  name: "PdfView",
  components: {
    pdf,
  },
  props: {
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      numPages: "",
    };
  },
  created() {
    this.getNumPages();
  },
  methods: {
    getNumPages() {
      var loadingTask = pdf.createLoadingTask(this.url);
      loadingTask.promise
        .then((pdf) => {
        
          this.numPages = pdf.numPages;
        })
        .catch(() => {
          console.error("pdf加载失败");
        });
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
// .pdf-wrap {
//   width: 100%;
//   #example,
//   #mycanvas {
//     width: 100%;
//     height: calc(100vh - 150px);
//     overflow-y: auto;
//   }
// }
// ::v-deep #toolbarViewerRight {
//   display: none !important;
// }
// #mycanvas {
//   background: olivedrab;
// }
.el-card {
  height: calc(100vh - 100px);
  overflow-y: auto;
}
.pdfStyle {
  border: 1px solid #333;
}
</style>
