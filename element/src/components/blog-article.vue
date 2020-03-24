<template>
  <div class="blog-article" @click="readArticle(articleId)">
    <div class="main-left">
      <h3>{{articleTitle}}</h3>
      <p>{{briefIntroduction}}</p>
      <span>
        <i class="el-icon-collection-tag">{{articleClassify}}</i>
      </span>
      <span>
        <i class="el-icon-time">{{publishDate}}</i>
      </span>
      <span>
        <i class="el-icon-discount">{{contentSize}}</i>
      </span>
      <span>
        <i class="el-icon-thumb">(1000)</i>
      </span>
      <span>
        <i class="el-icon-chat-square">(20)</i>
      </span>
      <span>
        <i class="el-icon-caret-top">(100)</i>
      </span>
    </div>
    <div class="main-right">
      <img :src="imgPath" alt="封面图片" width="100%" height="100%" />
    </div>
    <hr />
  </div>
</template>

<script>
import https from "../http.js";
import router from "../router/index.js";

export default {
  name: "BlogArticle",

  props: [
    "articleId",
    "articleTitle",
    "briefIntroduction",
    "publishDate",
    "articleClassify",
    "contentSize",
    "imgPath"
  ],
  methods: {
    readArticle: function(articleId) {
      router.push({ path: `/article-read/${articleId}` });
    }
  }
};
</script>

<style scoped>
.blog-article {
  width: 70%;
  height: 150px;
  margin: 0 0 20px 10%;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.blog-article:hover {
  color: firebrick;
  cursor: pointer;
}

.main-left {
  width: 80%;
  height: 100%;
  margin: 0;
  float: left;
  /* background-color: aqua; */
}

.main-right {
  width: 20%;
  height: 100%;
  margin: 0;
  float: right;
  /* background-color: brown; */
}

h3 {
  font-size: 20px;
  font-weight: lighter;
  font-style: italic;
}

p {
  font-size: 16px;
  color: dimgray;
}

span {
  font-size: 12px;
  color: dimgray;
  margin-right: 20px;
}

a:link {
  text-decoration: none;
  color: darkslategray;
}
a:visited {
  text-decoration: none;
  color: darkslategray;
}
a:hover {
  text-decoration: none;
  color: firebrick;
}
a:active {
  text-decoration: none;
  color: maroon;
}
</style>