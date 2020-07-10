<template>
  <div>
    <h1 id="postInfo">Description</h1>
    <md-card>
      <md-card-media></md-card-media>
      <md-card-header>
        <div class="md-title">Luxuary House</div>

        <div class="md-subhead">
          Amazing house with 4 bedrooms and 3 bathrooms
          <br />
          <div id="priceInfo">Price : 1500$</div>
          <br />
          <div id="addressInfo">Address: "2345, Main St, E1A 1B3"</div>
        </div>
      </md-card-header>
    </md-card>
    <img
      src="https://www.realestate.com.au/blog/images/600x450-fit,progressive/2020/03/25104807/house-for-rent.jpg"
      alt="People"
    />
    <h1>Contact</h1>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  data: () => ({
    city: "",
    NumberOfRooms: null,
    price: null
  }),
  methods: {}
};
</script>

<style>
#postInfo {
  text-align: left;
  /* margin-left: 20px; */
}
</style>