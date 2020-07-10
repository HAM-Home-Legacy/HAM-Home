<template>
  <div>
    <div id="search-component-container">
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="city">city</label>
            <md-select v-model="city" name="city" id="City">
              <md-option value="Tunis">Tunis</md-option>
              <md-option value="Ben Arous">Ben Arous</md-option>
              <md-option value="Bizerte">Bizerte</md-option>
              <md-option value="Sousse">Sousse</md-option>
              <md-option value="Mahdia">Mahdia</md-option>
              <md-option value="Sfax">Sfax</md-option>
              <md-option value="Gabes">Gabes</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <md-input
              v-model="NumberOfRooms"
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
      </div>

      <md-button id="SearchBtn" class="md-primary md-raised" @click="showPostFunction">Search</md-button>
      <postView myData='hello' v-if="showPost"  posts="posts" />
    </div>
    <!-- <div id="Single-Post-Container">
      <SinglePost />
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import PostView from "./PostView.vue";
export default {
  name: "search",
  components: { PostView },
  data: () => ({
    city: "",
    NumberOfRooms: 1,
    price: 0,
    showPost: false,
    posts: []
  }),
  methods: {
    async showPostFunction() {
      let filteredPosts = await axios.post("/api/posts/search", {
        state: this.city,
        numberOfRooms: this.NumberOfRooms,
        price: this.price
      });
      this.posts = filteredPosts.data;
      console.log(this.posts);
      this.showPost = true;
    },
  },
};
</script>

<style>
.md-layout {
  background-color: gray;
}
#search-component-container {
  margin: auto;
  position: relative;
  top: 30%;
  height: 100vh;
}
#SearchBtn {
  float: right;
}
#Single-Post-Container {
  width: 50%;
  float: right;
}
</style>
