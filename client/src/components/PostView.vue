<template>
  <div class="PostView">

    <div id="without-extra">
      <md-card>
        <md-card-media>
          <img :src="'http://localhost:3000/' + post.image" alt="People" />
        </md-card-media>

        <md-card-header>
          <div class="md-title"></div>
          <div class="md-subhead">
            <div id="addressInfo">{{ post.description }}</div>
            <div id="stateInfo">{{ post.state }}</div>
            <br />
            <div id="priceInfo">Price: {{ post.price }}$</div>

            <br />
            <div id="addressInfo">This house Has {{post.numberOfRooms}} rooms</div>
          
        </div>
        <br />
      </md-card-header>
        <md-card-actions md-alignment="space-between">
        <router-link :to="{path:`/user/${post._id}` }" id="readMoreBtn">
          <md-button @click="showSinglePostFunction">Read more</md-button>
        </router-link>
        </md-card-actions>
    </md-card>
      <SinglePost v-if="showSinglePost" :post="post"/>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';
export default {
  name: 'PostView',
  components: { SinglePost },
  props: ['post'],
  data: () => ({
    showSinglePost: false,
    city: null,
    numberOfRooms: null,
    price: null,
  }),
  methods: {
    showSinglePostFunction() {
      this.showSinglePost = true;
    },
  },
};
</script>

<style>
.PostView{
  float:left;
  width:20%;
  margin-top: 40px;
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
#readMoreBtn {
  margin: auto;
  position: relative;
  top: 50%;
  margin-top: 50px;
  margin-left: 200px;
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
