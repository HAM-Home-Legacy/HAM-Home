<template>
  <div >
     <img
      src="https://www.realestate.com.au/blog/images/600x450-fit,progressive/2020/03/25104807/house-for-rent.jpg"
      alt="People"
      id='singlePost'/>
      <h1 class="md-description">{{post.description}}</h1>
        <div class="md-subhead">
          {{post.state}}
          <br />
          <h1 id="priceInfo">{{post.price}}</h1>
          <br />
          <h1 id="addressInfo">{{post.NumberOfRooms}}</h1>
        </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "SinglePost",
  data: () => ({
    city: "",
    NumberOfRooms: null,
    price: null,
    post: []
  }),
  async beforeMount(){
    let id = window.location.pathname.slice(6)
    let foundPost = await axios.post("/api/posts/search", {_id:id});
    this.post = foundPost.data[0]
  },
  methods: {
    close(){
      this.showPost = false
    },
 
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
#singlePost{
  float :right
}

</style>