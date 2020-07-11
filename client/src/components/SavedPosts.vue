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
  name: "SavedPosts",
  components: { PostView },
  data: () => {
    return {
      posts: []
    };
  },
  async beforeMount() {
    try {
      let posts = await axios.post("http://localhost:3000/api/users/user", {
        email: localStorage.email
      });
      // this.posts = JSON.parse(posts.data[0].posts);
      this.posts = JSON.parse("[" + posts.data[0].posts + "]");
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped></style>
