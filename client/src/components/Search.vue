<template>
  <div>
    <div id="search-component-container">
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="city">City</label>
            <md-select v-model="city" name="city" id="City">
              <md-option value>All</md-option>
              <md-option value="Tunis">Tunis</md-option>
              <md-option value="Ben Arous">Ben Arous</md-option>
              <md-option value="Bizerte">Bizerte</md-option>
              <md-option value="Sousse">Sousse</md-option>
              <md-option value="Mahdia">Mahdia</md-option>
              <md-option value="Sfax">Sfax</md-option>
              <md-option value="Gabes">Gabes</md-option>
              <md-option value="Nabeul">Nabeul</md-option>
              <md-option value="Monastir">Monastir</md-option>
              <md-option value="kasserine">kasserine</md-option>
              <md-option value="Kef">Kef</md-option>
              <md-option value="Beja">Beja</md-option>
              <md-option value="Gafsa">Gafsa</md-option>
              <md-option value="Tataouine">Tataouine</md-option>
              <md-option value="Sidi bouzid">Sidi bouzid</md-option>
              <md-option value="Jendouba">Jendouba</md-option>
              <md-option value="Siliana">Siliana</md-option>
              <md-option value="Kairouan">Kairouan</md-option>
              <md-option value="Tozeur">Tozeur</md-option>
              <md-option value="Ariana">Ariana</md-option>
              <md-option value="Mednin">Mednin</md-option>
              <md-option value="Kebili">Kebili</md-option>
              <md-option value="Mennouba">Mennouba</md-option>
              <md-option value="Zaghouan">Zaghouan</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="Number Of Rooms">Number Of Rooms</label>
            <md-input
              v-model="numberOfRooms"
              name="Number Of Rooms"
              id="Number Of Rooms"
              type="number"
              step="1"
            ></md-input>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="price">Price</label>
            <md-input v-model="price" name="price" id="price" type="number" step="100"></md-input>
          </md-field>
        </div>
        <md-button id="SearchBtn" class="md-primary md-raised" @click="showPostFunction">Search</md-button>
      </div>
      <div id="post-view-div">
        <div v-for="(post,index) in posts" :key="index">
          <postView :post="post" :owner="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostView from "./PostView.vue";
// import $ from 'jquery'
export default {
  name: "search",
  components: { PostView },
  data: () => ({
    city: "",
    numberOfRooms: "",
    price: "",
    showPost: false,
    posts: []
  }),
  async beforeMount() {
    try {
      let posts = await axios.post("http://localhost:3000/api/posts", {});
      this.posts = posts.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async showPostFunction() {
      let obj = {};
      if (this.city !== "") {
        obj["state"] = this.city;
      }
      if (this.numberOfRooms !== "") {
        obj["numberOfRooms"] = this.numberOfRooms;
      }
      if (this.price !== "") {
        obj["price"] = this.price;
      }
      let filteredPosts = await axios.post("/api/posts/search", obj);
      this.posts = filteredPosts.data;
      this.showPost = true;
      console.log(this.posts);
    }
  }
};
</script>

<style scoped>
#post-view-div {
  overflow: scroll;
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar {
  display: none;
}
.md-layout {
  background-color: gray;
}
#search-component-container {
  margin: auto;
  position: fixed;
  top: 0%;
  height: 100vh;
  margin-top: 100px;
  width: 98%;
  overflow: hidden;
}
#SearchBtn {
  float: right;
  margin-top: 25px;
  margin-right: 30px;
}
#Single-Post-Container {
  width: 50%;
  float: right;
}
</style>
