<template>
  <div>
    <home-hero v-if="isHomeView"></home-hero>
    <other-pages-hero v-else></other-pages-hero>

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
    <a id="toTop" class="scroll" style="display: block" @click="backToTop">
      <span id="toTopHover" style="opacity: 1"> </span
    ></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Home', link: '/' },
        { text: 'Parts', link: '/parts' },
        { text: 'Repair', link: '/repair' },
        { text: 'Service', link: '/service' },
        { text: 'Contact', link: '/contact' },
      ],
    }
  },
  computed: {
    isHomeView() {
      return this.$nuxt.$route.name === 'index'
    },
  },

  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style>
.scroll {
  cursor: pointer;
}
</style>
