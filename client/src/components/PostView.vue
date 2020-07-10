<template>
  <div class="PostView">
    <h1>{{myData}} world</h1>
    <md-card>
      <md-card-media>
        <img
          src="https://i2.au.reastatic.net/800x600/372f291aefc16b58741894f3e6997878d9bb3d7924243e7cc311487fc1340547/main.jpg"
          alt="People"
        />
      </md-card-media>

      <md-card-header>
        <div class="md-title"></div>
        <div class="md-subhead">
          <div v-for="(item, index)  in posts" :key="index">
            {{item.state}}
            <br />
            <div id="priceInfo"></div>

            <br />
            <div id="addressInfo">{{item.numberOfRooms}}</div>
          </div>
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
  props: ["myData"],
  data: () => ({
    showPost: false
  }),
  methods: {
    showPostFunction() {
      this.showPost = true;
      console.log(this.props);
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
