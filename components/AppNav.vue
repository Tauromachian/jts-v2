<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">
        <img
          class="img-fluid"
          src="/johnson-logo-min.png"
          alt="JTS Logo"
          width="500"
        />
      </nuxt-link>
      <button
        id="navbar-toggler"
        class="navbar-toggler mt-3 btn btn-outline-light"
        type="button"
        data-bs-toggle="collapse"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mdi mdi-menu fs-1 text-white"></span>
      </button>
      <div
        class="collapse navbar-collapse navbar-default ayanEffects ayanHoverEffect_7"
      >
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <nuxt-link class="nav-link" aria-current="page" to="/">
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/parts" class="nav-link">Parts</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/repair" class="nav-link">Repair</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/service" class="nav-link">Service</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
          </li>
        </ul>
      </div>
      <div id="modal" class="ayanEffects ayanHoverEffect_7">
        <ul
          class="navbar-nav d-flex flex-column justify-content-center align-items-center h-100 w-100 mx-0"
        >
          <li class="nav-item">
            <nuxt-link class="nav-link" aria-current="page" to="/">
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/parts">Parts</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/repair">Repair</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/service">Service</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
          </li>
        </ul>
        <button id="modal-close-button" class="btn position-absolute">
          <span class="mdi mdi-close fs-2"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
}
</script>
