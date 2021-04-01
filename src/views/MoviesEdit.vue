<template>
  <div class="movies-edit">
    <form v-on:submit.prevent="updateMovie(movie)">
      <h1>Movie Details:</h1>
      <div class="form-group">
        Title:
        <input type="text" v-model="movie.title" />
      </div>
      <div class="form-group">
        Year:
        <input type="text" v-model="movie.year" />
      </div>
      <div class="form-group">
        Plot:
        <input type="text" v-model="movie.plot" />
      </div>
      <div class="form-group">
        Director:
        <input type="text" v-model="movie.director" />
      </div>
      <div class="form-group">
        English:
        <input type="text" v-model="movie.english" />
      </div>
      <input type="submit" value="Update Movie!" />
    </form>
  </div>
</template>
<style></style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get(`/api/movies/${this.$route.params.id}`).then((res) => {
      this.movie = res.data;
    });
  },
  methods: {
    updateMovie: function (movie) {
      let params = {
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        director: movie.director,
        english: movie.english,
      };
      axios.patch(`/api/movies/${movie.id}`, params).then(() => {
        // this.movie gets set in the GET request from the "created" lifecycle
        this.$router.push("/movies/" + this.movie.id);
      });
    },
  },
};
</script>
