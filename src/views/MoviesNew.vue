<template>
  <div class="movies-new">
    <!-- create input fields -->
    <!-- link those input fields to params variable using v-model -->
    <form>
      <h2>Create a Movie!</h2>
      <div class="input-field col s6 form-group">
        <input autofocus v-model="newMovieTitle" id="title" type="text" />
        <label for="title">Title</label>
      </div>

      <div class="input-field col s6 form-group">
        <input v-model="newMovieYear" type="text" id="year" />
        <label for="year">Year:</label>
      </div>

      <div class="input-field col s6 form-group">
        <label for="plot">Plot:</label>
        <input v-model="newMoviePlot" type="text" id="plot" maxlength="50" />
        <small class="text-light" v-if="newMoviePlot.length > 0 && newMoviePlot.length <= 50">
          {{ 50 - newMoviePlot.length }} characters left!
        </small>
      </div>

      <div class="input-field col s6 form-group">
        <label for="director">Director:</label>
        <input v-model="newMovieDirector" type="text" id="director" />
      </div>

      <div class="input-field col s6 form-group">
        <label for="english">English:</label>
        <input v-model="newMovieEnglish" type="text" id="english" />
      </div>

      <button v-on:click="createMovie()" class="btn waves-effect waves-light">
        Add Movie!
        <i class="material-icons right"></i>
      </button>
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
  background-color: slategrey;
  color: white;
}
input {
  color: white;
}
</style>
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
