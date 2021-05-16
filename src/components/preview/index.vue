<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" class="pre-view">
    <h3 class="h3">文件: {{ fileName }}</h3>
    <template v-if="url">
      <image-view v-if="fileStatus === 'AllImageEtx'" :url="url"></image-view>
      <pdf-view
        v-else-if="pdfStatusObj.includes(fileStatus)"
        :url="url"
      ></pdf-view>
      <pdf-view
        v-else-if="fileStatus === 'AllOfficeEtx'"
        :url="url"
        :ispdf-type="true"
      ></pdf-view>
      <video-view
        v-else-if="fileStatus === 'AllVideoEtx'"
        :url="url"
      ></video-view>
      <compress-view
        v-else-if="fileStatus === 'AllAchieveEtx'"
        :file-data="fileData"
      ></compress-view>
      <xls-view v-else-if="fileStatus === 'AllXlsEtx'" :url="url"></xls-view>
    </template>
  </div>
</template>

<script>
import ImageView from "./imageView";
import PdfView from "./pdfView";
import VideoView from "./videoView";
import CompressView from "./compressView";
import XlsView from "./xlsView";
export default {
  name: "Preview",
  components: {
    ImageView,
    PdfView,
    VideoView,
    CompressView,
    XlsView,
  },
  props: {},
  data() {
    return {
      fullscreenLoading: false,
      fileName: this.$route.query.fileName,
      url: "",
      fileData: {},
      fileStatus: "",
      pdfStatusObj: ["AllTxtEtx", "AllCADEtx"],
    };
  },
  mounted() {
    this.getFileData();
  },
  methods: {
    getFileData() {
      const fileAddressUrl = this.$route.query.url;
      const fileNameArr = this.$route.query.fileName.split(".");
      const fileType = `.${fileNameArr[fileNameArr.length - 1]}`;
      const AllOfficeEtx = [".pdf", ".doc", ".docx", ".pptx", ".ppt"]; // 解决
      const AllImageEtx = [".jpg", ".png", ".gif", ".bmp", ".heic", ".jpeg"]; // 解决  '.tiff'需要单独处理，没有需求要展示，所以暂时不处理
      const AllCADEtx = [".dwg", ".dxf"]; // 解决
      const AllXlsEtx = [".xls", ".xlsx"]; // 解决
      const AllAchieveEtx = [
        ".tar.gz",
        ".tar.bzip2",
        ".tar.xz",
        ".zip",
        ".rar",
        ".tar",
        ".7z",
        "br",
        ".bz2",
        ".lz4",
        ".sz",
        ".xz",
        ".zstd",
      ];
      const AllTxtEtx = [
        ".txt",
        ".java",
        ".php",
        ".py",
        ".md",
        ".js",
        ".css",
        ".xml",
        ".log",
        ".json",
        ".html",
        ".svg",
        ".vue",
      ]; // 解决
      const AllVideoEtx = [".mp4", ".webm", ".ogg"]; // 解决
      const AllEtx = [
        ...AllOfficeEtx,
        ...AllImageEtx,
        ...AllCADEtx,
        ...AllAchieveEtx,
        ...AllTxtEtx,
        ...AllVideoEtx,
        ...AllXlsEtx,
      ];
      let responseType = "arraybuffer";
      if (!AllEtx.includes(fileType)) {
        this.$message.error("不支持此类型文件预览");
        return;
      } else if (AllAchieveEtx.includes(fileType)) {
        responseType = "json";
      }
      this.fullscreenLoading = true;
      const fd = new FormData();
      fd.append("url", fileAddressUrl);
      this.$http({
        method: "post",
        url: "/plm-doc/api/plmfile",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        responseType: responseType,
        data: fd,
      })
        .then((res) => {
          this.fullscreenLoading = false;
          var binaryData = [];
          binaryData.push(res.data);
          let fType = "";
          if (AllOfficeEtx.includes(fileType)) {
            this.fileStatus = "AllOfficeEtx";
            fType = "application/pdf";
          } else if (AllImageEtx.includes(fileType)) {
            this.fileStatus = "AllImageEtx";
            fType = "image/png";
          } else if (AllCADEtx.includes(fileType)) {
            this.fileStatus = "AllCADEtx";
            fType = "application/pdf";
          } else if (AllAchieveEtx.includes(fileType)) {
            this.fileStatus = "AllAchieveEtx";
            fType = "contentType";
            this.fileData = res.Data;
          } else if (AllTxtEtx.includes(fileType)) {
            this.fileStatus = "AllTxtEtx";
            fType = "application/pdf;charset=utf-8";
          } else if (AllVideoEtx.includes(fileType)) {
            this.fileStatus = "AllVideoEtx";
            fType = "video/mp4";
          } else if (AllXlsEtx.includes(fileType)) {
            this.fileStatus = "AllXlsEtx";
            fType = "application/pdf";
          }
          this.url = window.URL.createObjectURL(
            new Blob(binaryData, { type: fType })
          );
        })
        .catch(() => {
          this.fullscreenLoading = false;
        });
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.pre-view {
  width: 80%;
  margin: 0 auto;
  .h3 {
    padding: 20px 0;
    margin: 0;
    font-weight: bold;
  }
}
</style>
