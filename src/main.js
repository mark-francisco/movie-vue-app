import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// import Bootstrap into application
import "bootstrap";
// import the minified CSS for Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
