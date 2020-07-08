import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import UserProfile from "../components/UserProfile.vue";
import UserInfos from "../components/UserInfos.vue";
import UserPosts from "../components/UserPosts.vue";
import MakeAPost from "../components/MakeAPost.vue";
import SavedPosts from "../components/SavedPosts.vue";
import Search from "../components/Search.vue";
import Slides from "../components/Slides.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/user",
      name: "user",
      component: UserProfile,
      children: [
        {
          path: "/",
          component: Slides,
        },
        {
          path: "infos",
          component: UserInfos,
        },
        {
          path: "posts",
          component: UserPosts,
        },
        {
          path: "makepost",
          component: MakeAPost,
        },
        {
          path: "saved",
          component: SavedPosts,
        },
      ],
    },
    {
      path: "/search",
      name: "Search",
      component: Search,

    },
  ],
});


