<template>
  <div class="PostView">
    <md-card>
      <md-card-media>
        <img
          src="https://www.realestate.com.au/blog/images/600x450-fit,progressive/2020/03/25104807/house-for-rent.jpg"
          alt="People"
        />
      </md-card-media>

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

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <!-- <md-button>Favourite</md-button> -->
          </div>

          <!-- <md-card-expand-trigger> -->
          <md-button>Read more</md-button>
          <!-- </md-card-expand-trigger> -->
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.</md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
    <md-card>
      <md-card-media>
        <img
          src="https://i2.au.reastatic.net/800x600/372f291aefc16b58741894f3e6997878d9bb3d7924243e7cc311487fc1340547/main.jpg"
          alt="People"
        />
      </md-card-media>

      <md-card-header>
        <div class="md-title">Dream House</div>
        <div class="md-subhead">
          Amazing house with 3 bedrooms and 2 bathrooms
          <br />
          <div id="priceInfo">Price : 900$</div>

          <br />
          <div id="addressInfo">Address: "2345, Main St, E1A 1B3"</div>
        </div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <!-- <md-button>Favourite</md-button> -->
          </div>

          <!-- <md-card-expand-trigger> -->
          <md-button @click="showPostFunction">Read more</md-button>
          <!-- </md-card-expand-trigger> -->
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.</md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
    <SinglePost v-if="showPost" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  name: "PostView",
  components: { SinglePost },
  data: () => ({
    showPost: false
  }),
  methods: {
    showPostFunction() {
      this.showPost = true;
    }
  }
};
</script>

<style>
.PostView {
  height: 480px;
}

.md-card {
  width: 320px;
  margin: 8px;
  display: inline-block;
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
</style>
