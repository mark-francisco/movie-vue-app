<template>
  <div class="movies-index">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">All Movies!</h1>
        <p class="lead">These are all of the movies currently showing in our theaters lol</p>
        Search by Movie Title:
        <input v-model="titleFilter" list="titles" />
        <datalist id="titles">
          <!-- generates dropdown options of Movies in db -->
          <option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
        </datalist>
      </div>
    </div>
    <div class="container">
      <div
        is="transition-group"
        class="row"
        appear
        enter-active-class="animated bounceInDown"
        leave-active-class="animated fadeOut"
      >
        <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')" v-bind:key="movie.id">
          <div class="card border-dark mb-4" style="max-width: 22rem">
            <img
              src="https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/9/83/983263a2-4c24-11ea-afd3-2778f1470a49/5e41886866efe.image.jpg?resize=1200%2C800"
              class="card-img-top"
              alt="movie release poster shown at premieres"
            />
            <div class="card-header">ID: {{ movie.id }}</div>
            <div class="card-body text-dark">
              <p class="card-title">Title: {{ movie.title }}</p>
              <p class="card-text">Release Year: {{ movie.year }}</p>
              <!-- movie.id is an accessible attribute that comes back from the INDEX GET request and v-for loop -->
              <router-link v-bind:to="`/movies/${movie.id}`">
                <button class="btn btn-outline-info">More Info:</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      movies: [],
      titleFilter: "",
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/api/movies").then((res) => {
        this.movies = res.data;
        // console.log("INDEX of Movies:", this.movies);
      });
    },
  },
};
</script>
