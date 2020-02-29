<template>
  <div class="container-fluid red">
    <div>
      <logo />
      <h1 class="title">
        kernel-ad
      </h1>
      <h2 class="subtitle">
        Portfolio
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <!-- Masonry -->
    <no-ssr>
      <div
        v-masonry
        transition-duration="3s"
        item-selector=".item"
        class="masonry-container"
      >
        <div
          v-for="(item, index) in blocks"
          :key="index"
          v-masonry-tile
          class="item"
        >
          <p>{{ item.title }} - {{ index }}</p>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    'no-ssr': NoSSR,
    Logo
  },
  data() {
    return {
      blocks: [
        {
          title: 'nice block'
        },
        {
          title: 'another shiny block'
        },
        {
          title: 'the last block'
        }
      ]
    }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
