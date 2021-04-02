<template>
  <div class="movies-index">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">All Movies!</h1>
        <p class="lead">These are all of the movies currently showing in our theaters lol</p>
      </div>
    </div>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <div class="container">
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
</template>
<style></style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      movies: [],
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
