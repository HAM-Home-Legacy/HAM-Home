<template>
  <div >
  <md-card id="postInfo">
      <md-card-media id="photo">
       <img
      src="https://www.realestate.com.au/blog/images/600x450-fit,progressive/2020/03/25104807/house-for-rent.jpg"
      alt="People"
      id='singlePostImg'/>
      </md-card-media>

      <md-card-header id="informationDetail"> 
        <div class="md-title"></div>
        <div id="infoText" class="md-subhead">
        
          <div class="custom">
          <h3>Title:</h3>
          
          <div id="TitleInfo">{{post.title}}</div>
          </div>
       
        <div class="custom">
        <h3>Description:</h3>
        <div id="DescriptionInfo">{{post.description}}</div>
       </div>

       <div class="custom">
        <h3>City:</h3>
          <div id="stateInfo">{{post.state}}</div>
        </div>

       <div class="custom">    
        <h3>Price:</h3>
            <div id="priceInfo">{{post.price}}$</div>
          </div>

            <div class="custom">
        <h3>Rooms:</h3>
           
            <div id="addressInfo">This house Has {{post.numberOfRooms}} rooms</div>
          </div>
        </div>
        <br />
      </md-card-header>
    </md-card>
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
h3, div {
  margin:10px;
  font-family: Calibri
  
}

h3 {
  font-weight:bold
}
 #postInfo{
  width: 100%;
  overflow:hidden;
  background-color: white
}
#singlePostImg{
  float :right;
  width: 900px;
  height: 550px
}
#infoText{
  font-size: 20px;
  color: white;
}
.custom {
  font-family: sans-serif;
  font-size:20px;
  margin:20px;
  border: 2px solid gray;
  border-radius: 1px;
  font-style:italic;
  background-color:white;
  color:gray
}
#informationDetail {
  float:left;
  width:40%;
  height:100%;
  margin: auto 0 ;
  padding:0;
}
.photo {
  float:right;
  width:70%;
  margin: auto 0 ;
  padding:0;
}
</style>