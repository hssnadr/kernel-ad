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
      <p v-for="(prj_, indx) in displayProjects" :key="indx">
        {{ prj_.title }} {{ prj_.skills }}
      </p>
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
    <fields></fields>
    <skills></skills>
    <h3>MASONRY</h3>
    <no-ssr class="container-fluid">
      <div
        v-if="isEmptySel"
        v-masonry
        transition-duration=".5s"
        item-selector=".item"
        class="masonry-container"
        style="background-color: #f00"
      >
        <Cardboard
          v-for="(item, index) in displayProjects"
          :key="index"
          v-masonry-tile
          class="item"
          :item="item"
        />
      </div>
      <div v-else>
        <p>No projects selected! It works!!</p>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NoSSR from 'vue-no-ssr'
import Logo from '~/components/Logo.vue'
import Fields from '~/components/FilterFields.vue'
import Skills from '~/components/FilterSkills.vue'
import Cardboard from '~/components/Cardboard.vue'

export default {
  components: {
    'no-ssr': NoSSR,
    Logo,
    Fields,
    Skills,
    Cardboard
  },
  computed: {
    isEmptySel() {
      if (this.displayProjects.length > 0) {
        return true
      } else {
        return false
      }
    },
    ...mapGetters({
      displayProjects: 'projects/filteredProjects'
    })
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
  /* background-color: #eee; */
  /* display: inline-block; */
  /* float: left; */
}
</style>
