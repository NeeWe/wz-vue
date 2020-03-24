import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import QS from 'qs';
import BlogArticle from '@/components/blog-article.vue';
import CommentComponent from "@/components/comment-component.vue";

Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.component('BlogArticle', BlogArticle);
Vue.component('comment-component', CommentComponent);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

