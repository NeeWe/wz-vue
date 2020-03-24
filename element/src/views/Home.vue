<template>
  <div id="app">
    <div v-for="(item,index) in articles" :key="index">
      <BlogArticle
        :articleId="item.articleId"
        :articleTitle="item.articleName"
        :publishDate="item.createTime"
        :briefIntroduction="item.briefIntroduction"
        :articleClassify="item.articleClassify"
        :contentSize="item.articleContentSize"
        :imgPath="item.coverImg"
      ></BlogArticle>
    </div>
  </div>
</template>

<script>
import http from "../http.js";

export default {
  data() {
    return {
      articles: ""
    };
  },
  methods: {
    awaitDealData: async function() {
      await http
        .fetchGet("/api/getAllArticle")
        .then(data => {
          console.log(data.data);
          this.articles = data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {
    this.awaitDealData();
  }
};
</script>



<style>
</style>
