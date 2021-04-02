<template>
  <div class="movies-show">
    <div class="col s12 m7">
      <h2 class="header">Movie Details:</h2>
      <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <p>ID: {{ currentMovie.id }}</p>
            <p>Title: {{ currentMovie.title }}</p>
            <p>Year: {{ currentMovie.year }}</p>
            <p>Plot: {{ currentMovie.plot }}</p>
            <p>Director: {{ currentMovie.director }}</p>
            <p>English: {{ currentMovie.english }}</p>
            <p>Genres: {{ currentMovie.genres }}</p>
          </div>
          <div class="card-action">
            <router-link v-bind:to="`/movies/${currentMovie.id}/edit`">
              <button class="indigo lighten-3 waves-effect waves-light btn">Edit this Movie:</button>
            </router-link>
            <button class="amber accent-4 btn waves-effect waves-light" v-on:click="destroyMovie(currentMovie)">
              Delete this Movie:
            </button>
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
