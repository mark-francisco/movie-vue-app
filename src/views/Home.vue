<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>Create a Movie!</h2>
    <!-- create input fields -->
    <!-- link those input fields to params variable using v-model -->
    <form>
      <label for="title">Title:</label>
      <input v-model="title" type="text" id="title" name="title" />
      <br />
      <label for="year">Year:</label>
      <input v-model="year" type="text" id="year" name="year" />
      <br />
      <label for="plot">Plot:</label>
      <input v-model="plot" type="text" id="plot" name="plot" />
      <br />
      <label for="director">Director:</label>
      <input v-model="director" type="text" id="director" name="director" />
      <br />
      <label for="english">English:</label>
      <input v-model="english" type="text" id="english" name="english" />
      <br />
    </form>
    <button v-on:click="createMovie()">Create!</button>
    <h2>All Movies!</h2>
    <h3>Currently selected movie: {{ currentMovie }}</h3>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <ul>
        <p>ID: {{ movie.id }}</p>
        <p>Title: {{ movie.title }}</p>
        <button v-on:click="showMovie(movie.id)">more info:</button>
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
      title: "",
      year: "",
      plot: "",
      director: "",
      english: "",
      currentMovie: "",
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/api/movies").then((res) => {
        this.movies = res.data;
        console.log("here are all the movies:", this.movies);
      });
    },
    createMovie: function () {
      let params = {
        title: this.title,
        year: this.year,
        plot: this.plot,
        director: this.director,
        english: this.english,
      };
      axios.post("/api/movies", params).then((res) => {
        console.log("Movie added!", res.data);
        this.movies.push(res.data);
      });
    },
    showMovie: function (id) {
      axios.get(`/api/movies/${id}`).then((res) => {
        this.currentMovie = res.data;
        console.log("current movie:", this.currentMovie);
      });
    },
  },
};
</script>
