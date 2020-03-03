<template>
  <div>
    <div class="container-fluid red">
      <logo />
      <h1 class="title">
        KERNEL AD
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
    <h3>FILTERS</h3>
    <h3>MASONRY</h3>
    <no-ssr class="container-fluid">
      <div
        v-masonry
        transition-duration=".5s"
        item-selector=".item"
        class="masonry-container"
        style="background-color: #f00"
      >
        <div
          v-for="(item, index) in projects"
          :key="index"
          v-masonry-tile
          class="item"
        >
          <cardboard :item="item" />
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import Logo from '~/components/Logo.vue'
import Cardboard from '~/components/Cardboard.vue'

export default {
  components: {
    'no-ssr': NoSSR,
    Logo,
    Cardboard
  },
  // data() {
  //   return {
  //     statues: []
  //   }
  // },
  computed: {
    projects() {
      // return this.$store.state.projects.all
      return this.$store.state.projects.all.filter(
        (project) => project.statue === 'Freelance Project'
      )
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
.item {
  background-color: #eee;
  /* display: inline-block; */
  /* float: left; */
}
</style>
