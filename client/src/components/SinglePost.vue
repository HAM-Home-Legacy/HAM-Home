<template>
  <div>
    <img
      src="https://www.realestate.com.au/blog/images/600x450-fit,progressive/2020/03/25104807/house-for-rent.jpg"
      alt="People"
      id="singlePost"
    />
    <h1 class="md-description">Description: {{post.description}}</h1>
    <div class="md-subhead">
      State: {{post.state}}
      <br />
      <h1 id="priceInfo">Price: {{post.price}}</h1>
      <br />
      <h1 id="addressInfo">Number Of Rooms: {{post.NumberOfRooms}}</h1>
      <h4>Owner Number:{{postOwner.phoneNumber}}</h4>
      <h4>Owner Name:{{postOwner.fullName}}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SinglePost",
  data: () => ({
    city: "",
    NumberOfRooms: null,
    price: null,
    post: null,
    postOwner: null
  }),
  async beforeMount() {
    let id = window.location.pathname.split("/")[2];
    let foundPost = await axios.post("/api/posts/search", { _id: id });
    this.post = foundPost.data[0];
    let postOwner = await axios.post("/api/users/user", {
      email: this.post.email
    });
    this.postOwner = postOwner.data[0];
  },
  methods: {
    close() {
      this.showPost = false;
    }
  }
};
</script>

<style scoped>
#img {
  height: 255px;
  width: 330px;
  border-radius: 0px !important;
  margin-top: 40px;
}
#singlePost {
  float: right;
}
</style>