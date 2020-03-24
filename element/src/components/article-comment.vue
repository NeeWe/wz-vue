<template>
  <div id="commment-main">
    <comment-component :forest="commentJson" child="false"></comment-component>
  </div>
</template>

<script>
import http from "../http.js";
import store from "../store/index.js";

export default {
  data() {
    return {
      commentJson: null
    };
  },
  props: ["articleId"],
  methods: {
    getComment: function() {
      var articleId = store.getters.articleId;
      http
        .fetchGet("/api/buildCommentTree", {
          articleId: articleId
        })
        .then(data => {
          this.commentJson = data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    buildAllComment: function(commentJson) {}
  },

  mounted() {
    this.getComment();
  }
};
</script>

<style scoped>
#commment-main {
  width: 70%;
  height: 100%;
  margin: 0 20% 20px 20%;
  padding: 0;
}
</style>