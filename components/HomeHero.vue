<template>
  <header class="hero-header">
    <div class="d-flex flex-column hero-container">
      <!-- navigation -->
      <app-nav></app-nav>
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
          <nuxt-link to="/contact" class="btn btn-primary px-3 px-sm-5 py-sm-3"
            >Request a quote</nuxt-link
          >
        </div>
      </div>
    </div>
    <!-- //navigation -->
  </header>
</template>

<script>
export default {
  name: 'HomeHero',
}
</script>

<style></style>
