<template>
  <div class="PostView">
    <div id="without-extra">
      <md-card>
        <md-card-media>
          <img
            src="https://www.realestate.com.au/blog/images/600x450-fit,progressive/2020/03/25104807/house-for-rent.jpg"
            alt="People"
            id="singlePost"
          />
        </md-card-media>

        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead">
            <div id="TitleInfo">{{post.title}}</div>
            <br />
            <div id="DescriptionInfo">{{post.description}}</div>
            <br />
            <div id="stateInfo">{{post.state}}</div>
            <br />
            <div id="priceInfo">Price: {{post.price}}$</div>

            <br />
            <div id="addressInfo">This house Has {{post.numberOfRooms}} rooms</div>
          </div>
          <br />
        </md-card-header>
        <md-card-actions class="buttonsContain" md-alignment="space-between">
          <!-- <router-link :to="{path:`/${localStorage.id}/${post._id}` }" id="readMoreBtn"> -->
          <!-- </router-link> -->
          <md-button id="saveBtn" @click="savePost" v-if="!owner">Save</md-button>
          <md-button id="readMoreBtn" @click="showSinglePostFunction">Read more</md-button>
        </md-card-actions>
      </md-card>
      <!-- <SinglePost v-if="showSinglePost" :post="post" /> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostView",
  props: ["post", "owner"],
  data: () => ({
    showSinglePost: false,
    city: null,
    numberOfRooms: null,
    price: null
  }),
  methods: {
    showSinglePostFunction() {
      this.showSinglePost = true;
      this.$router.push(`/${localStorage.id}/${this.post._id}`);
    },
    savePost() {
      axios.post("/api/users/savePosts", {
        email: localStorage.email,
        post: this.post
      });
    }
  }
};
</script>

<style>
.PostView {
  float: left;
  width: 20%;
  margin-top: 40px;
}
.buttonsContain {
  width: 100%;
  margin-top: 90px;
}
.md-card {
  width: 320px;
  margin: 8px;
  height: 550px;
  vertical-align: top;
}
.md-subhead {
  height: 100px;
  max-height: 100px;
}
#priceInfo {
  font-size: 25px;
  color: white;
  font-weight: bold;
}

#addressInfo {
  font-size: 18px;
  color: white;
  font-weight: bold;
}
#readMoreBtn,
#saveBtn {
  border: 2px solid white;
}
#readMoreBtn {
  float: right;
}
#extra {
  z-index: 1;
}
.aa2 {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  margin-left: 50px;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  /* overflow: auto; Enable scroll if needed */
  background-color: red;
}
p {
  color: #666;
  line-height: 1.9;
}
/* Modal Content/Box */
.aa3 {
  background-color: #fefefe;
  border-radius: 8px;
  margin: 25% auto;
  padding: 20px;
  border: 1px solid white;
  width: 50%;
}
/* The Close Button */
.close2 {
  color: black;
  float: left;
  font-size: 28px;
  font-weight: bold;
  width: 1%;
}
.close2:hover,
.close2:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
