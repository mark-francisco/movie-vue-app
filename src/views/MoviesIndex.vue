<template>
  <div class="movies-index">
    <h2>All Movies!</h2>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <ul>
        <p>ID: {{ movie.id }}</p>
        <p>Title: {{ movie.title }} ({{ movie.year }})</p>
        <!-- movie.id is an accessible attribute that comes back from the INDEX GET request and v-for loop -->
        <router-link v-bind:to="`/movies/${movie.id}`"><button>More Info:</button></router-link>
        <hr />
      </ul>
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
