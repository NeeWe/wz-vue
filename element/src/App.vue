<template>
  <div>
    <div id="app">
      <el-container height="100%">
        <el-container>
          <el-header height="91px">
            <BlogHeader></BlogHeader>
          </el-header>
          <el-main>
            <div id="app-main-container">
              <router-view></router-view>
            </div>
            <div id="app-side-bar">
              <div id="bar-top">
                <div>
                  <img
                    src="https://blog-article-image.oss-cn-shanghai.aliyuncs.com/NationalDay70_ZH-CN1636316274_1920x1080.jpg"
                    alt="头像"
                    width="100px"
                    height="100px"
                  />
                  <p>Hello</p>
                  <p>一句简单的自我介绍</p>
                  <div>
                    <table frame="void">
                      <tr id="table-title">
                        <td>文章</td>
                        <td>分类</td>
                        <td>标签</td>
                      </tr>
                      <tr id="table-content">
                        <td>123</td>
                        <td>12</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://github.com/NeeWe/">
                            <img
                              src="https://blog-article-image.oss-cn-shanghai.aliyuncs.com/20200309140042.png"
                              alt="GitHub"
                            />
                          </a>
                        </td>
                        <td></td>
                        <td>
                          <a href="https://www.jianshu.com/u/bd3051e9c9d8">
                            <img
                              src="https://blog-article-image.oss-cn-shanghai.aliyuncs.com/20200309140043.png"
                              alt="JianShu"
                            />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <hr />
                </div>
              </div>
              <div id="bar-bottom"></div>
            </div>
          </el-main>
          <el-footer height="50px">
            <blog-footer></blog-footer>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import BlogHeader from "@/components/blog-header.vue";
import BlogArticle from "@/components/blog-article.vue";
import BlogFooter from "@/components/blog-footer.vue";
import ArticlePage from "@/components/article-page.vue";
export default {
  components: { BlogHeader, BlogArticle, ArticlePage, BlogFooter },
  data() {
    return {
      articleId: ""
    };
  }
};
</script>


<style scoped>
/* div {
  width: 100%;
  height: 100%;
  background-color: aqua;
} */

.el-header {
  height: 91px;
}

.el-container {
  height: 100%;
  width: 100%;
}

#app-main-container {
  /* background-color: burlywood; */
  width: 65%;
  margin: 0 0 0 5%;
  float: left;
}

#app-side-bar {
  width: 20%;
  /* background-color: darkgrey; */
  float: right;
  margin-top: 60px;
  margin-right: 10%;
  text-align: center;
}

table {
  color: gray;
  width: 80%;
  margin-left: 10%;
}

#table-title {
  font-size: 12px;
}

#table-content {
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
}

#bar-top > div > img {
  border: dimgray double 4px;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  border: 0;
  margin: 0;
}
</style>