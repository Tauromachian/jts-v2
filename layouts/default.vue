<template>
  <div>
    <header class="hero-header">
      <div class="d-flex flex-column hero-container">
        <!-- navigation -->
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
                  <nuxt-link class="nav-link active" aria-current="page" to="/">
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
                  <nuxt-link class="nav-link active" aria-current="page" to="/">
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
        <div
          class="container d-flex flex-column justify-content-center align-items-center my-5 hero-content text-center"
        >
          <h1 class="text-white hero-title">
            The only source
            <div class="text-center text-sm-end me-lg-5 pe-xl-5">
              of
              <span class="hero-title--highlight"> knowledge </span>
            </div>
            <div class="text-center text-sm-start ms-lg-5 ps-xl-5">
              is
              <span class="hero-title--highlight">Experience</span>
            </div>
          </h1>
          <div class="d-flex justify-content-center mt-5 call-to-action-button">
            <nuxt-link
              to="/contact"
              class="btn btn-primary px-3 px-sm-5 py-sm-3"
              >Request a quote</nuxt-link
            >
          </div>
        </div>
      </div>
      <!-- //navigation -->
    </header>

    <Nuxt />

    <footer class="pt-10">
      <div
        class="d-flex flex-column justify-content-center align-items-center pt-5"
      >
        <nuxt-link to="/" class="navbar-brand">
          <img
            class="img-fluid"
            src="/johnson-logo-min.png"
            alt="JTS Logo"
            width="300"
          />
        </nuxt-link>
        <div class="d-flex justify-content-center">
          <a href="https://www.linkedin.com/company/johnsonturbine/"
            ><span class="mdi mdi-linkedin fs-1"></span
          ></a>
          <a href="https://www.facebook.com/JohnsonTurbine"
            ><span class="mdi mdi-facebook fs-1"></span
          ></a>
        </div>
      </div>
      <div class="container">
        <ul class="d-flex flex-wrap justify-content-center footer-list w-100">
          <li class="mx-3"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="mx-3"><nuxt-link to="/parts">Parts</nuxt-link></li>
          <li class="mx-3"><nuxt-link to="/repair">Repair</nuxt-link></li>
          <li class="mx-3"><nuxt-link to="/service">Service</nuxt-link></li>
          <li class="mx-3"><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
        <!-- //Footer -->
        <div class="d-flex justify-content-center py-3">
          <div>
            <p>&copy; 2022 Johnson Turbine Support, LLC. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
    <a id="toTop" href="#home" class="scroll" style="display: block">
      <span id="toTopHover" style="opacity: 1"> </span
    ></a>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
