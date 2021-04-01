import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/Signup.vue";
import LogIn from "../views/Login.vue";
import LogOut from "../views/Logout.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesEdit from "../views/MoviesEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: LogIn,
  },
  {
    path: "/logout",
    name: "Logout",
    component: LogOut,
  },
  {
    path: "/movies",
    name: "movies-index",
    component: MoviesIndex,
  },
  {
    path: "/movies/new",
    name: "movies-new",
    component: MoviesNew,
  },
  {
    path: "/movies/:id",
    name: "movies-show",
    component: MoviesShow,
  },
  {
    path: "/movies/:id/edit",
    name: "movies-edit",
    component: MoviesEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
