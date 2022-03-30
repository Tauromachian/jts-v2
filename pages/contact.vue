<template>
  <div class="container">
    <section>
      <h1>Contact Us</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <!-- Contact cards -->
            <div class="col-12 mt-3">
              <div class="card">
                <div class="card-body d-flex">
                  <div>
                    <h4>Locations</h4>
                    <p>Office- Hackettstown, NJ</p>
                    <p>Shop- Bloomfield, CT</p>
                  </div>
                  <div
                    class="ms-auto d-flex justify-content-center align-items-center me-3"
                  >
                    <a
                      href="https://www.google.com/maps/place/311+Warren+St,+Hackettstown,+NJ+07840/@40.846898,-74.829912,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3839dfdda5597:0x971c732987e6bce6!8m2!3d40.846898!4d-74.827718?hl=en-US"
                    >
                      <span
                        class="mdi color-primary mdi-map-marker fs-1"
                        aria-hidden="true"
                      ></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-3">
              <div class="card">
                <div class="card-body d-flex">
                  <div id="email-holder" class="d-flex flex-column">
                    <h4>Emails</h4>
                  </div>
                  <div
                    class="ms-auto d-flex justify-content-center align-items-center me-3"
                  >
                    <a id="email-principal">
                      <span
                        class="mdi color-primary mdi-email fs-1"
                        aria-hidden="true"
                      ></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-3">
              <div class="card">
                <div class="card-body d-flex">
                  <div>
                    <h4>Phones</h4>
                    <p>Office- (973) 263-5696</p>
                    <p>Shop- (860) 200-2202</p>
                  </div>
                  <div
                    class="ms-auto d-flex justify-content-center align-items-center me-3"
                  >
                    <a href="tel:+19732635696"
                      ><span
                        class="mdi color-primary mdi-phone fs-1"
                        aria-hidden="true"
                      ></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5 mt-sm-0">
          <div class="card mt-3 position-relative">
            <div class="card-body">
              <div v-if="message.text">
                <div
                  class="alert"
                  :class="{
                    'alert-success': message.success,
                    'alert-danger': !message.success,
                  }"
                  role="alert"
                >
                  {{ message.text }}
                </div>
              </div>
              <form @submit.prevent="sendEmail">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
                  <input
                    v-model="form.address"
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    required
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Subject</label
                  >
                  <input
                    v-model="form.subject"
                    class="form-control"
                    aria-describedby="Contact me subject"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Message</label
                  >
                  <textarea
                    v-model="form.body"
                    class="form-control"
                    aria-label="With textarea"
                    required
                  ></textarea>
                </div>
                <button
                  v-if="loading"
                  class="btn btn-primary"
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
                <button v-else type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <span
              class="mdi color-primary mdi-email position-absolute email-form--icon"
            ></span>
          </div>
        </div>
      </div>
      <h2 class="mt-5">Office</h2>
      <div class="map-w3-agileits">
        <iframe
          src="https://maps.google.com/maps?q=311%20warren%20street%2007840&t=&z=09&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          width="45%"
        ></iframe>
      </div>
      <h2 class="mt-5">Shop</h2>
      <div class="map-w3-agileits">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354044.0247590097!2d-72.9279555373036!3d41.82688199681568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7aaab72c9ec9b%3A0x8eac33b578b0829!2s45%20W%20Dudley%20Town%20Rd%2C%20Bloomfield%2C%20CT%2006002!5e0!3m2!1sen!2sus!4v1646539110508!5m2!1sen!2sus"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
import emailsGenerator from '@/mixins/emails-generator'

export default {
  name: 'ContactView',
  mixins: [emailsGenerator],
  data() {
    return {
      form: {
        address: '',
        subject: '',
        body: '',
      },
      loading: false,
      message: { text: '', success: true },
    }
  },
  head() {
    return {
      title: 'Johnson Turbine Support | Service',
    }
  },
  methods: {
    async sendEmail() {
      this.loading = true

      let response
      try {
        response = await this.$axios.$post(
          'https://jts-email-service.herokuapp.com/api/email',
          this.form
        )
      } catch (error) {
        this.setIncorrectMessage(error.message)
        return
      }
      if (response.error) {
        this.setIncorrectMessage(response.message)
        return
      }

      this.message.success = true
      this.message.text = 'Email send successfully'
      this.form = {
        address: '',
        subject: '',
        body: '',
      }
      this.loading = false
    },
    setIncorrectMessage(message) {
      this.message.success = false
      this.message.text = message
      this.loading = false
    },
  },
}
</script>

<style></style>
