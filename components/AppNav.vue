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
        v-if="isScreenSmall"
        id="navbar-toggler"
        class="navbar-toggler mt-3 btn btn-outline-light"
        type="button"
        data-bs-toggle="collapse"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="openModal"
      >
        <span class="mdi mdi-menu fs-1 text-white"></span>
      </button>
      <div
        v-if="!isScreenSmall"
        class="collapse navbar-collapse navbar-default ayanEffects ayanHoverEffect_7"
      >
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'index' }"
              class="nav-link"
              aria-current="page"
              to="/"
            >
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'parts' }"
              to="/parts"
              class="nav-link"
              >Parts</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'repair' }"
              to="/repair"
              class="nav-link"
              >Repair</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'service' }"
              to="/service"
              class="nav-link"
              >Service</nuxt-link
            >
          </li>

          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'contact' }"
              to="/contact"
              class="nav-link"
              >Contact</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div v-else id="modal" class="ayanEffects ayanHoverEffect_7">
        <ul
          class="navbar-nav d-flex flex-column justify-content-center align-items-center h-100 w-100 mx-0"
        >
          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'index' }"
              class="nav-link"
              aria-current="page"
              to="/"
            >
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'parts' }"
              class="nav-link"
              to="/parts"
              >Parts</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'repair' }"
              class="nav-link"
              to="/repair"
              >Repair</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'service' }"
              class="nav-link"
              to="/service"
              >Service</nuxt-link
            >
          </li>

          <li class="nav-item">
            <nuxt-link
              :class="{ active: path === 'contact' }"
              class="nav-link"
              to="/contact"
              >Contact</nuxt-link
            >
          </li>
        </ul>
        <button class="btn position-absolute" @click="closeModal">
          <span class="mdi mdi-close fs-2"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  data() {
    return {
      modal: {},
      body: {},
      width: '',
    }
  },

  computed: {
    isScreenSmall() {
      return this.width < 991
    },
    path() {
      return this.$nuxt.$route.name
    },
  },

  watch: {
    path() {
      this.closeModal()
    },
  },
  mounted() {
    this.modal = document.getElementById('modal')
    this.body = document.body

    this.closeModal()

    this.width = window.innerWidth
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    })
  },

  methods: {
    openModal() {
      this.modal.style.display = 'block'
      this.body.style.overflow = 'hidden'
    },

    closeModal() {
      this.modal.style.display = 'none'
      this.body.style.overflow = 'unset'
    },
  },
}
</script>
