<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Awesome Movie App!</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/signup">Sign Up</router-link>
          <router-link class="nav-link" to="/login">Log In</router-link>
          <router-link class="nav-link" to="/logout">Log Out</router-link>
          <router-link class="nav-link" to="/movies">All Movies</router-link>
          <router-link class="nav-link" to="/movies/new">Add new Movie</router-link>
        </div>
      </div>
    </nav>

    <div id="nav"></div>
    <router-view />
  </div>
</template>
