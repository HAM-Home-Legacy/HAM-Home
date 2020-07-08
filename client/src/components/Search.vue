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
            <md-select
              v-model="Rooms"
              name=" Number Of Rooms"
              id="Number Of Rooms"
              placeholder="Number Of Rooms"
            >
              <md-option value="2 Bedrooms, 1 Bathroom">1 Bedroom, 1 Bathroom</md-option>
              <md-option value="3 Bedrooms, 1 Bathroom">2 Bedrooms, 1 Bathroom</md-option>
              <md-option value="4 Bedrooms, 2 Bathroom">3 Bedrooms, 2 Bathroom</md-option>
              <md-option value="2 Bedrooms, 3 Bathrooms">4 Bedrooms, 3 Bathrooms</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="price">Price</label>
            <md-select v-model="price" name="price" id="price">
              <md-option value="200-300$">200-300$</md-option>
              <md-option value="300-400$">300-400$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
              <md-option value="400-500$">400-500$</md-option>
            </md-select>
          </md-field>
        </div>
      </div>

      <md-button class="md-primary md-raised" @click="city = 'pulp-fiction'">Search</md-button>
      <postView />
    </div>
    <h1>Post View</h1>
    <PostView />
  </div>
</template>

<script>
import PostView from "./PostView.vue";
export default {
  name: "search",
  components: { PostView },
  data: () => ({
    city: "",
    NumberOfRooms: null,
    price: null
  })
};
</script>

<style>
body {
  background-image: url("https://picsum.photos/1024/480/?image=283");
  background-repeat: no-repeat;
  background-size: cover;
}
.md-layout {
  background-color: gray;
}
#search-component-container {
  margin: auto;
  position: relative;
  top: 30%;
  height: 100vh;
}
</style>