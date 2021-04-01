<template>
  <div class="movies-show">
    <h1>Movie Details:</h1>
    <p>ID: {{ currentMovie.id }}</p>
    <p>Title: {{ currentMovie.title }}</p>
    <p>Year: {{ currentMovie.year }}</p>
    <p>Plot: {{ currentMovie.plot }}</p>
    <p>Director: {{ currentMovie.director }}</p>
    <p>English: {{ currentMovie.english }}</p>
    <p>Genres: {{ currentMovie.genres }}</p>
    <router-link v-bind:to="`/movies/${currentMovie.id}/edit`"><button>Edit this Movie:</button></router-link>
    <button v-on:click="destroyMovie(currentMovie)">Delete this Movie:</button>
  </div>
</template>
<style></style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentMovie: "",
    };
  },
  created: function () {
    this.showMovie();
  },
  methods: {
    showMovie: function () {
      axios.get(`/api/movies/${this.$route.params.id}`).then((res) => {
        this.currentMovie = res.data;
      });
    },
    destroyMovie: function (movie) {
      axios.delete(`/api/movies/${movie.id}`).then(() => {
        this.$router.push("/movies");
      });
    },
  },
};
</script>
