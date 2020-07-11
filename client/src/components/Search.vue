<template>
  <div>
    <div id="search-component-container">
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="city">City</label>
            <md-select v-model="city" name="city" id="City">
              <md-option value="">All</md-option>
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
            <md-input
              v-model="price"
              name="price"
              id="price"
              type="number"
              step="100"
            ></md-input>
          </md-field>
        </div>
      </div>

      <md-button
        id="SearchBtn"
        class="md-primary md-raised"
        @click="showPostFunction"
        >Search</md-button
      >
      <div v-for="(post, index) in posts" :key="index">
        <postView v-if="showPost" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PostView from './PostView.vue';
export default {
  name: 'search',
  components: { PostView },
  data: () => ({
    city: '',
    numberOfRooms: '',
    price: '',
    showPost: false,
    posts: [],
  }),
  methods: {
    async showPostFunction() {
      let obj = {};
      if (this.city !== '') {
        obj['state'] = this.city;
      }
      if (this.numberOfRooms !== '') {
        obj['numberOfRooms'] = this.numberOfRooms;
      }
      if (this.price !== '') {
        obj['price'] = this.price;
      }
      let filteredPosts = await axios.post(
        'http://localhost:3000/api/posts/search',
        obj
      );
      this.posts = filteredPosts.data;
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
