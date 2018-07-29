<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Travel</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/posts/new" class="nav-link">New Post</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/posts/new" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/posts/new" class="nav-link">About Us</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
