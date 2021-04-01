<template>
  <div class="movies-new">
    <h2>Create a Movie!</h2>
    <!-- create input fields -->
    <!-- link those input fields to params variable using v-model -->
    <form>
      <label for="title">Title:</label>
      <input v-model="newMovieTitle" type="text" id="title" name="title" />
      <br />
      <label for="year">Year:</label>
      <input v-model="newMovieYear" type="text" id="year" name="year" />
      <br />
      <label for="plot">Plot:</label>
      <input v-model="newMoviePlot" type="text" id="plot" name="plot" />
      <br />
      <label for="director">Director:</label>
      <input v-model="newMovieDirector" type="text" id="director" name="director" />
      <br />
      <label for="english">English:</label>
      <input v-model="newMovieEnglish" type="text" id="english" name="english" />
      <br />
    </form>
    <button v-on:click="createMovie()">Create!</button>
  </div>
</template>
<style></style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
      newMovieEnglish: "",
    };
  },
  created: function () {},
  methods: {
    createMovie: function () {
      let params = {
        title: this.newMovieTitle,
        year: this.newMovieYear,
        plot: this.newMoviePlot,
        director: this.newMovieDirector,
        english: this.newMovieEnglish,
      };
      axios.post("/api/movies", params).then(() => {
        this.$router.push("/movies");
      });
    },
  },
};
</script>
