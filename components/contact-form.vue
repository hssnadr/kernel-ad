<template>
  <div class="contact-form">
    <form class="form" @submit="onSubmit">
      <input
        v-model="contact.name"
        required
        name="name"
        placeholder="Nom"
        type="text"
        autocomplete="off"
      />
      <input
        v-model="contact.email"
        required
        name="email"
        placeholder="E-mail"
        type="email"
        autocomplete="off"
      />
      <textarea
        v-model="contact.message"
        name="message"
        rows="7"
        placeholder="Message"
      ></textarea>
      <button class="button">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      isSending: false
    }
  },

  methods: {
    clearForm() {
      for (const field in this.contact) {
        this.contact[field] = ''
      }
    },

    onSubmit(evt) {
      evt.preventDefault()

      this.isSending = true

      setTimeout(() => {
        // Build for data
        const form = new FormData()
        for (const field in this.contact) {
          form.append(field, this.contact[field])
        }

        // Send form to server
        this.$http
          .post('/app.php', form)
          .then((response) => {
            console.log(response)
            this.clearForm()
            this.isSending = false
          })
          .catch((e) => {
            console.log(e)
          })
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.contact-form {
  width: 600px;
  margin-left: auto;
  margin-right: auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    // font-size: 16px;
    width: 100%;
  }

  @media #{$small-down} {
    width: 400px;
  }
}

.contact-form input[type='email'],
.contact-form input[type='text'],
.contact-form textarea {
  background-color: $base-color;
  color: $primary-color;
  border: 1px solid $primary-color;
  width: 100%;
  // font-family: 'SharpGrotesk', 'Roboto', sans-serif;
  // font-weight: 300;
  padding: em(10px) 1em;
  margin-bottom: em(15px);
  outline: none;
}

.contact-form button {
  margin: 1em;
}
</style>
