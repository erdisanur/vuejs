import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Feed from "./views/Feed";
import About from "./views/About";
import FourOFour from "./views/FourOFour";
import Post from "./views/Post";
import bus from "./bus";

Vue.use(VueRouter);

const routes = [
  {
    name: "blog",
    path: "/",
    redirect: "/posts"
  },
  {
    name: "about",
    path: "/about",
    component: About
  },
  {
    name: "home",
    path: "/home",
    component: Home
  },
  {
    name: "posts",
    path: "/posts",
    component: Feed
  },
  {
    name: "post",
    path: "/posts/:slug",
    component: Post
  },
  {
    name: "page",
    path: "/page/:page",
    component: Feed
  },
  {
    name: "four-o-four",
    path: "/404",
    component: FourOFour
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.afterEach(() => {
  //-- Bump the key on App component to force component to update on route change.
  bus.$emit("bumpViewKey");
});

export default router;
