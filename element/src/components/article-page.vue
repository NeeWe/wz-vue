<template>
  <div id="app">
    <div class="content">
      <div class="hljs" ref="hlDiv" v-html="code"></div>
    </div>
    <ArticleComment :articleId="articleId"></ArticleComment>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/docco.css";
import http from "../http.js";
import store from "../store/index.js";
import ArticleComment from "@/components/article-comment.vue";

export default {
  name: "ArticlePage",
  props: ["articleId"],
  components: { ArticleComment },
  data() {
    return {
      code: ""
    };
  },

  methods: {
    awaitDealData: async function() {
      this.code = await http
        .fetchGet("/api/getArticleById", {
          articleId: this.articleId
        })
        .then(data => {
          return data.data;
        })
        .catch(err => {
          console.log(err);
        });
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      this.code = marked(this.code);
    }
  },

  mounted() {
    this.awaitDealData();
  },

  beforeMount() {
    store.commit("updateState", this.articleId);
  }
};
</script>

<style scoped>
.content {
  width: 70%;
  height: 100%;
  margin: 0 20% 20px 20%;
  padding: 0;
}
</style>