import MakeAPost from "../components/MakeAPost.vue";
import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import UserProfile from "../components/UserProfile.vue";
import UserInfos from "../components/UserInfos.vue";
import UserPosts from "../components/UserPosts.vue";
import SavedPosts from "../components/SavedPosts.vue";
import Search from "../components/Search.vue";
import Slides from "../components/Slides.vue";
import singlePost from "../components/SinglePost.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/login",
          name: "Login",
          component: Login,
        },
        {
          path: "/signup",
          name: "SignUp",
          component: SignUp,
        },
      ],
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
        {
          path: "search",
          component: Search,
        },
        {
          path: "singlePost",
          component: singlePost,
          props: true
        },
      ],
    },
  ],
});
