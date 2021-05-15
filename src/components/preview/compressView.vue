<template>
  <div class="compress-wrap">
    <el-card>
      <el-input
        v-model="filterText"
        placeholder="输入关键字进行过滤"
      ></el-input>
      <el-tree
        ref="tree"
        class="filter-tree"
        :data="treeData"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        @node-click="nodeClick"
      >
        <span slot-scope="{ node, data }" class="custom-tree-node">
          <span
            ><i v-if="data.children" class="iconfont iconwenjianjia1"></i
            >{{ node.label }}</span
          >
        </span>
      </el-tree>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "CompressView",
  props: {
    fileData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      url: "",
      filterText: "",
      treeData: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  mounted() {
    this.initFile();
  },
  methods: {
    initFile() {
      const fileData = this.fileData.treeData;
      const childArr = [];
      for (const key in fileData) {
        childArr.push({
          label: key,
          url: fileData[key],
        });
      }
      const treeData = [
        {
          label: this.fileData.top,
          url: "",
          children: childArr,
        },
      ];
      this.treeData = treeData;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.toUpperCase().indexOf(value.toUpperCase()) !== -1;
    },
    nodeClick(data) {
      if (data.children) {
        return;
      }
      const { href } = this.$router.resolve({
        path: "/preview",
        query: {
          url: data.url,
          fileName: data.label,
        },
      });
      window.open(href, "_self");
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.compress-wrap {
  width: 100%;
  .filter-tree {
    margin-top: 20px;
  }
}
::v-deep .el-card__body {
  min-height: calc(100vh - 110px);
}
.iconwenjianjia1 {
  color: #d6d60d;
  padding-right: 8px;
}
::v-deep .el-icon-caret-right:before {
  content: "";
}
</style>
