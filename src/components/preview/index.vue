<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" class="pre-view">
    <h3 class="h3">文件: {{ fileName }}</h3>
    <template v-if="url">
      <pdf-view v-if="pdfStatusObj.includes(fileStatus)" :url="url"></pdf-view>
      <video-view
        v-else-if="fileStatus === 'AllVideoEtx'"
        :url="url"
      ></video-view>
      <compress-view
        v-else-if="fileStatus === 'AllAchieveEtx'"
        :file-data="fileData"
      ></compress-view>
      <!-- <xls-view v-else-if="fileStatus === 'AllXlsEtx'" :url="url"></xls-view> -->
    </template>
  </div>
</template>

<script>
// import ImageView from "./imageView";
import PdfView from "./pdfView";
import VideoView from "./videoView";
import CompressView from "./compressView";
// import XlsView from "./xlsView";
export default {
  name: "Preview",
  components: {
    // ImageView,
    PdfView,
    VideoView,
    CompressView,
    // XlsView,
  },
  props: {},
  data() {
    return {
      fullscreenLoading: false,
      fileName: this.$route.query.fileName,
      url: "",
      fileData: {},
      fileStatus: "",
      pdfStatusObj: [
        "AllTxtEtx",
        "AllCADEtx",
        "AllOfficeEtx",
        "AllXlsEtx",
        "AllImageEtx",
      ],
    };
  },
  mounted() {
    this.getFileData();
  },
  methods: {
    getUrlParams(name) {
      // 不传name返回所有值，否则返回对应值
      var url = window.location.search;
      if (url.indexOf("?") == 1) {
        return false;
      }
      url = url.substr(1);
      url = url.split("&");
      name = name || "";
      var nameres;
      // 获取全部参数及其值
      for (var i = 0; i < url.length; i++) {
        var info = url[i].split("=");
        var obj = {};
        obj[info[0]] = decodeURI(info[1]);
        url[i] = obj;
      }
      // 如果传入一个参数名称，就匹配其值
      if (name) {
        for (let i = 0; i < url.length; i++) {
          for (const key in url[i]) {
            if (key == name) {
              nameres = url[i][key];
            }
          }
        }
      } else {
        nameres = url;
      }
      // 返回结果
      return nameres;
    },
    async getFileData() {
      this.fullscreenLoading = true;
      const params = {
        currentUser: this.getUrlParams("agile.userName"),
      };
      const water = (
        await this.$http.get("/agile/view/getWatermarkAndSignInfo", {
          params,
        })
      ).data;
      // const imageUrl = (
      //   await this.$http({
      //     method: "get",
      //     url: "/agile/down/downSignFile",
      //   })
      // ).data;
      const {
        location,
        show,
        fontSize,
        showManner,
        tileManner,
        color,
        transparency,
        remark,
        isSign,
      } = water;
      const extra1 =
        location +
        "&&" +
        show +
        "&&" +
        `http://192.168.2.90:8001/down/downSignFile`;
      const extra2 =
        fontSize +
        "&&" +
        showManner +
        "&&" +
        tileManner +
        "&&" +
        color
          .split(",")
          .map((item) => {
            return item.replace(/[^0-9]/gi, "");
          })
          .join("#") +
        "&&" +
        transparency / 100 +
        "&&" +
        `${remark}`;
      const fileAddressUrl = this.$route.query.url;
      const fileNameArr = this.$route.query.fileName.split(".");
      const fileType = `.${fileNameArr[fileNameArr.length - 1]}`;
      const AllOfficeEtx = [".pdf", ".doc", ".docx", ".pptx", ".ppt"]; // 解决
      const AllImageEtx = [".jpg", ".png", ".gif", ".bmp", ".heic", ".jpeg"]; // 解决  '.tiff'需要单独处理，没有需求要展示，所以暂时不处理
      const AllCADEtx = [".dwg", ".dxf", ".DWG"]; // 解决
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
      const fd = new FormData();
      fd.append("url", fileAddressUrl);
      // fd.append(
      //   "extra1",
      //   "3&&1&&http://121.227.30.214:8102/plm-doc/sys/download/nvcj49lm12k7slge73rw-l14fd4qyjrtn6xtah8f0-watermark.jpg"
      // );
      if (isSign === "1") {
        fd.append("extra1", extra1);
      }
      fd.append("extra2", extra2);
      this.$http({
        method: "post",
        url: "/api/plmfile",
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
            fType = "application/pdf";
            // image/png
          } else if (AllCADEtx.includes(fileType)) {
            this.fileStatus = "AllCADEtx";
            fType = "application/pdf";
          } else if (AllAchieveEtx.includes(fileType)) {
            this.fileStatus = "AllAchieveEtx";
            fType = "contentType";
            this.fileData = res.data;
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
          // const link = document.createElement("a"); // 生成一个a标签。
          // link.href = window.URL.createObjectURL(
          //   new Blob(binaryData, { type: fType })
          // ); // href属性指定下载链接
          // link.click(); // click()事件触发下载
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
