<template>
  <div>
    <md-card>
      <md-card-media></md-card-media>
      <md-card-header>
     
      <br />
        <div class="md-title">{{post.description}}</div>

        <div class="md-subhead">
          {{post.state}}
          <br />
          <div id="priceInfo">{{post.price}}</div>
          <br />
          <div id="addressInfo">{{post.numberOfRooms}}</div>
        </div>
    <img
      src="https://www.realestate.com.au/blog/images/600x450-fit,progressive/2020/03/25104807/house-for-rent.jpg"
      alt="People"
      id='img'
    />
      </md-card-header>
    </md-card>
   
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: ["post"],
  data: () => ({
    city: "",
    NumberOfRooms: null,
    price: null
  }),
  methods: {
    close(){
      this.showPost = false
    }
  }
};
</script>

<style scoped>
#img{
  height:255px;
  width: 330px;
  border-radius: 0px !important;
  margin-top: 40px
}
#postInfo {
  text-align: left;
  /* margin-left: 20px; */
}

</style>