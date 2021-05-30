<template>
  <div>
    <el-input v-model="inputVal"> </el-input>
    <el-button @click="previewTest">预览</el-button>
    <div class="file">
      <!-- docker构建测试12 -->
      <el-table
        ref="table"
        v-loading="loading"
        :data="tableData"
        @row-click="preview"
      >
        <el-table-column type="index" label="#" />
        <el-table-column
          v-for="(item, k) in tableColumn"
          :key="k"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
          :width="item.width"
          :show-overflow-tooltip="true"
          :sortable="item.sortable"
          :default-sort="{ prop: 'fileName' }"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "File",
  components: {},
  data() {
    return {
      inputVal: "",
      id: "",
      loading: false,
      downloadLoading: false,
      tableData: [
        // {
        //   fileName: "val.xls",
        // },
      ],
      tableColumn: [
        {
          prop: "fileName",
          label: "文件名称",
          minWidth: "270",
          sortable: true,
        },
        {
          prop: "fileSize",
          label: "文件大小",
          minWidth: "85",
        },
        {
          prop: "fileType",
          label: "文件格式",
          minWidth: "80",
        },
        {
          prop: "rev",
          label: "版本",
          minWidth: "60",
        },
        {
          prop: "creator",
          label: "创建人",
          minWidth: "200",
        },
        {
          prop: "time",
          label: "创建时间",
          minWidth: "162",
        },
        {
          prop: "check",
          label: "签出人",
          minWidth: "70",
        },
        {
          prop: "date",
          label: "签出时间",
          minWidth: "162",
        },
      ],
    };
  },
  created() {
    this.getFinalList();
  },
  mounted() {},
  methods: {
    previewTest() {
      const { href } = this.$router.resolve({
        path: "/preview",
        query: {
          url:
            // "http://121.227.30.214:8803/plm-doc/sys/download/f6u86vf7dpcbuuy8rvtq-xlsx.xlsx",
            `http://121.227.30.214:8102/plm-doc/sys/download/7qjuslsuv50l15uwf5xk-2345678.xlsx`,
          fileName: this.inputVal,
        },
      });
      window.open(href);
      // this.$http
      //   .get("/agile/api/getFile", {
      //     params: {
      //       name: "22郭涛.docx",
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });
    },
    getFinalList() {
      const aaa = location.href;
      const arr = aaa.split("&");
      const idArr = arr[1].split("=");
      this.id = idArr[1];
      const params = {
        id: idArr[1],
      };
      this.loading = true;
      this.$http
        .get("/agile/view/getFileInfo", {
          params: params,
        })
        .then((res) => {
          this.loading = false;
          this.tableData = res.data;
        });
    },
    preview(val) {
      var fileName = val.fileName;
      fileName = fileName.replace(/#/g, "jinghao");
      const { href } = this.$router.resolve({
        path: "/preview",
        query: {
          url:
            // "http://121.227.30.214:8803/plm-doc/sys/download/f6u86vf7dpcbuuy8rvtq-xlsx.xlsx",
            "http://192.168.24.22:8001/down/downFile/" +
            fileName +
            "?fileId=" +
            val.fileId,
          fileName: val.fileName,
        },
      });
      window.open(href);
    },
    // 预览
    handlePreview(scope) {
      const fileAddressUrl =
        process.env.VUE_APP_BASE_API + "/plm-doc" + scope.row.fileUrl;
      const { href } = this.$router.resolve({
        path: "/preview",
        query: {
          url: fileAddressUrl,
          fileName: scope.row.fileName,
        },
      });
      window.open(href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.file {
  margin: 10px 20px;
  border: 1px solid #eff2f7;
  text-align: center;
  width: 80%；;
}
.radio-group {
  text-align: left;
  width: 100%;
  height: 43px;
  border: 1px solid #eff2f7;
}
.iconfont {
  font-size: 10px;
}
.heander {
  text-align: center;
}
::v-deep.el-table thead {
  color: #333333;
}
.el-table th > .cell {
  padding-left: 14px;
}
::v-deep.el-table td,
.el-table th.is-leaf {
  cursor: pointer;
}
</style>
