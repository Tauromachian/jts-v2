export default {
  mounted() {
    const emails = ['sales@johnsonturbine.com', 'shop@johnsonturbine.com']

    const emailHolder = document.getElementById('email-holder')
    const emailPrincipal = document.getElementById('email-principal')
    if (emailHolder) {
      setTimeout(function () {
        emailPrincipal.href = `mailto:${emails[0]}`
        for (const email of emails) {
          const a = document.createElement('a')
          a.text = email
          a.href = `mailto:${email}`
          emailHolder.appendChild(a)
        }
      }, 1000)
    }
  },
}
