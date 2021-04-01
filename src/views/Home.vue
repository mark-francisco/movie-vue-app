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
    <div v-for="movie in movies" v-bind:key="movie.id">
      <ul>
        <p>ID: {{ movie.id }}</p>
        <p>Title: {{ movie.title }}</p>
        <button v-on:click="showMovie(movie)">more info:</button>
        <hr />
      </ul>
    </div>
    <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Details:</h1>
        <p>
          Title:
          <input type="text" v-model="currentMovie.title" />
          Year:
          <input type="text" v-model="currentMovie.year" />
          Plot:
          <input type="text" v-model="currentMovie.plot" />
          Director:
          <input type="text" v-model="currentMovie.director" />
          English:
          <input type="text" v-model="currentMovie.english" />
        </p>
        <button>Close</button>
        <button v-on:click="updateMovie(currentMovie)">EDIT THIS MOVIE!</button>
        <button v-on:click="deleteMovie(currentMovie)">DELETE THIS MOVIE!</button>
      </form>
    </dialog>
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
        // console.log("INDEX of Movies:", this.movies);
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
    showMovie: function (movie) {
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function (movie) {
      let params = {
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        director: movie.director,
        english: movie.english,
      };
      axios.patch(`/api/movies/${movie.id}`, params).then((res) => {
        console.log("Edited Movie:", res.data);
      });
    },
    deleteMovie: function (movie) {
      // delete movie from the db
      axios.delete(`/api/movies/${movie.id}`).then((res) => {
        console.log(res.data);
        // get the index of the current movie within the "movies" array
        let index = this.movies.indexOf(movie);
        // delete that movie from the movies array used for this Vue page
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>
