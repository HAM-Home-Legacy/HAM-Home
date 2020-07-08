import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import UserProfile from "../components/UserProfile.vue";
import Search from "../components/Search.vue";

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
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    }
    // {
    //     path: "*",
    //     name: "Not found",
    //     component: ComponentNotFound,
    //   },
  ],
});
