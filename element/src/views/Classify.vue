<template>
  <div id="app">
    <el-tree :data="articleClassifyForest" :props="defaultProps" node-key="id" accordion>
      <span class="custom-tree-node" slot-scope="{ node }">
        <span @click="logId(node.key)">{{ node.label }}</span>
      </span>
    </el-tree>
  </div>
</template>

<script>
import http from "../http.js";
import router from "../router/index.js";
export default {
  name: "Classify",
  props: ["articleId"],
  data() {
    return {
      articleClassifyForest: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },

  methods: {
    awaitDealData: async function() {
      await http
        .fetchGet("/api/buildClassifyForest")
        .then(data => {
          console.log(data);
          this.articleClassifyForest = data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    logId: function(nodeKey) {
      if (typeof nodeKey === "string" && nodeKey.indexOf("article-") != -1) {
        var articleId = nodeKey.substring(8, nodeKey.length);
        router.push({ name: "ArticleRead", params: { articleId: articleId } });
      }
    }
  },

  mounted() {
    this.awaitDealData();
  }
};
</script>

<style scoped>
.custom-tree-node {
  font-size: 16px;
  line-height: 30px;
}
</style>