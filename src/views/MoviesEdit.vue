<template>
  <div class="movies-edit">
    <form v-on:submit.prevent="updateMovie(movie)">
      <h1>Movie Details:</h1>
      <label for="title" class="form-group">
        Title:
        <input id="title" autofocus type="text" v-model="movie.title" />
      </label>
      <label for="year" class="form-group">
        Year:
        <input id="year" type="text" v-model="movie.year" />
      </label>
      <label for="plot" class="form-group">
        Plot:
        <input id="plot" type="text" v-model="movie.plot" />
      </label>
      <label for="director" class="form-group">
        Director:
        <input id="director" type="text" v-model="movie.director" />
      </label>
      <label for="english" class="form-group">
        English:
        <input id="english" type="text" v-model="movie.english" />
      </label>
      <div>
        <input type="submit" value="Update Movie!" />
      </div>
    </form>
  </div>
</template>
<style>
.form-group {
  display: block;
  width: 75%;
}
form {
  margin: 50px;
  padding: 20px;
}
</style>
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
