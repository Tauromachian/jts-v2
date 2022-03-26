<template>
  <div>
    <header class="hero-header">
      <div class="d-flex flex-column hero-container">
        <!-- navigation -->
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a href="index.html" class="navbar-brand">
              <img
                class="img-fluid"
                src="/johnson-logo-min.png"
                alt="JTS Logo"
                width="500"
              />
            </a>
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
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="parts.html">Parts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="repair.html">Repair</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="service.html">Service</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div id="modal" class="ayanEffects ayanHoverEffect_7">
              <ul
                class="navbar-nav d-flex flex-column justify-content-center align-items-center h-100 w-100 mx-0"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="parts.html">Parts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="repair.html">Repair</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="service.html">Service</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
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
            <a href="contact.html" class="btn btn-primary px-3 px-sm-5 py-sm-3"
              >Request a quote</a
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
        <a href="index.html" class="navbar-brand">
          <img
            class="img-fluid"
            src="/johnson-logo-min.png"
            alt="JTS Logo"
            width="300"
          />
        </a>
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
          <li class="mx-3"><a href="index.html">Home</a></li>
          <li class="mx-3"><a href="parts.html">Parts</a></li>
          <li class="mx-3"><a href="repair.html">Repair</a></li>
          <li class="mx-3"><a href="service.html">Service</a></li>
          <li class="mx-3"><a href="contact.html">Contact</a></li>
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
