<template>
  <div class="pdf-wrap">
    <el-card>
      <!-- <div id="example"></div> -->
      <div id="mycanvas" ref="mycanvas"></div>
    </el-card>
  </div>
</template>
<script>
// import pdf from "@/assets/pdf/build/pdf";
import PDFObject from "pdfobject";
export default {
  name: "PdfView",
  components: {},
  props: {
    url: {
      type: String,
      default: "",
    },
    ispdfType: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // if (this.ispdfType) {
    //   this.getPdf();
    // } else {
    this.initFile();
    // }
    // document.oncontextmenu = new Function("event.returnValue=false;");
    // document.onselectstart = new Function("event.returnValue=false;");
  },
  methods: {
    getPage(pdf, pageNumber, container, numPages) {
      // 获取pdf
      const _this = this;
      pdf.getPage(pageNumber).then((page) => {
        const scale = container.offsetWidth / page.view[2];
        const viewport = page.getViewport(scale);
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        container.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        var renderContext = {
          canvasContext: ctx,
          transform: [1, 0, 0, 1, 0, 0],
          viewport: viewport,
          intent: "print",
        };
        page.render(renderContext).then(() => {
          pageNumber += 1;
          if (pageNumber <= numPages) {
            _this.getPage(pdf, pageNumber, container, numPages);
          }
        });
      });
    },
    // getPdf() {
    //   // 此中方式接受流形式返回
    //   this.$refs.mycanvas.scrollTop = 0;
    //   const pdfjsLib = pdf;
    //   pdfjsLib.PDFJS.workerSrc = "@/assets/pdf/build/pdf.worker.js";
    //   const loadingTask = pdfjsLib.getDocument(this.url);
    //   loadingTask.promise.then(
    //     (pdf) => {
    //       const numPages = pdf.numPages;
    //       const container = document.getElementById("mycanvas");
    //       const pageNumber = 1;
    //       this.getPage(pdf, pageNumber, container, numPages);
    //     },
    //     function (reason) {
    //       alert(reason);
    //     }
    //   );
    // },
    initFile() {
      const options = {
        pdfOpenParams: { scrollbars: "0", statusbar: "0" },
      };
      PDFObject.embed(this.url, "#mycanvas", options);
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.pdf-wrap {
  width: 100%;
  #example,
  #mycanvas {
    width: 100%;
    height: calc(100vh - 150px);
    overflow-y: auto;
  }
}
</style>
