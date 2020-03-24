<template>
  <el-row :gutter="10">
    <el-col :span="24">
      <div>
        <el-row :gutter="10">
          <el-col :span="5">
            <router-link to="/">LOGO</router-link>
          </el-col>
          <el-col :offset="1" :span="3">
            <i class="el-icon-s-home">
              <router-link to="/">首页</router-link>
            </i>
          </el-col>
          <el-col :offset="1" :span="3">
            <i class="el-icon-s-custom">
              <router-link to="/about-me">关于我</router-link>
            </i>
          </el-col>
          <el-col :offset="1" :span="3">
            <i class="el-icon-menu">
              <router-link to="/classify">分类</router-link>
            </i>
          </el-col>
          <el-col :offset="1" :span="3">
            <i class="el-icon-s-comment">
              <router-link to="/message">留言</router-link>
            </i>
          </el-col>
          <el-col :span="3">
            <i class="el-icon-s-shop">
              <router-link to="/file">归档</router-link>
            </i>
          </el-col>
        </el-row>
        <hr />
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "BlogHeader"
};
</script>

<style scoped>
.el-row {
  width: 100%;
  height: 100%;
}

.el-col {
  height: 100%;
  color: crimson;
  margin-top: 15px;
}

a:link {
  text-decoration: none;
  color: crimson;
}
a:visited {
  text-decoration: none;
  color: brown;
}
a:hover {
  text-decoration: none;
  color: coral;
}
a:active {
  text-decoration: none;
  color: maroon;
}
</style>