<template>
  <div :class="{isChild: child, hasBorder: true}" @click="showReply">
    <div v-for="(tree, index) in forest" :key="index">
      <p>
        <span>{{tree.commentUserId}}</span>
        <span>{{tree.createTime}}</span>
        <!-- <input type="hidden" :value="tree.id" /> -->
      </p>
      <p class="content">{{tree.content}}</p>
      <div v-if="show_reply">
        <form>
          <input type="text" />
          <input type="button" value="回复" />
        </form>
      </div>

      <hr />
      <comment-component :forest="tree.children" v-if="hasChildren(tree.children)" child="true"></comment-component>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-component",
  props: ["forest", "child"],
  methods: {
    hasChildren(children) {
      return children.length !== 0;
    },
    showReply() {
      this.show_reply = true;
    }
  },
  data() {
    return {
      show_reply: false
    };
  }
};
</script>

<style scoped>
.isChild {
  margin-left: 30px;
}

.content {
  margin-left: 30px;
}

.hasBorder {
  border-left: dimgray 1px solid;
}

span {
  margin-right: 10px;
  color: dimgray;
  font-size: 12px;
}
</style>