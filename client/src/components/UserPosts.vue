<template>
  <div>
    <h1>Saved Posts</h1>
    <div id="post-view-div">
      <div v-for="(post,index) in posts" :key="index">
        <PostView :post="post" :owner="true" />
      </div>
    </div>
  </div>
</template>

<script>
import PostView from "./PostView.vue";
import axios from "axios";
export default {
  name: "UserPosts",
  components: { PostView },
  data: () => {
    return {
      posts: []
    };
  },
  async beforeMount() {
    try {
      let posts = await axios.post("http://localhost:3000/api/posts/search", {
        email: localStorage.email
      });
      this.posts = posts.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped></style>
