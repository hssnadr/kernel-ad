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
    <button @click="setCategory('Design')">Design</button>
    <button @click="setCategory('Engineering')">Engineering</button>
    <p>{{ debuglog }}</p>
    <h3>MASONRY</h3>
    <no-ssr class="container-fluid">
      <div
        v-masonry
        transition-duration=".5s"
        item-selector=".item"
        class="masonry-container"
        style="background-color: #f00"
      >
        <cardboard
          v-for="(item, index) in filteredProjects"
          :key="index"
          v-masonry-tile
          class="item"
          :item="item"
        />
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
  data() {
    return {
      // allProjects: this.$store.state.projects.all,
      // filtProjects: this.allProjects,
      catFilter: [],
      debuglog: ''
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects.all
    },
    filteredProjects() {
      const allProj_ = this.projects
      const categories_ = this.catFilter
      const filtProj_ = []

      for (let i = 0; i < allProj_.length; i++) {
        // Statue
        // Categories
        if (categories_.length > 0) {
          for (let j = 0; j < categories_.length; j++) {
            // Tags
            if (allProj_[i].categories.includes(categories_[j])) {
              filtProj_.push(allProj_[i])
            }
          }
        }
      }

      return filtProj_
    }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    setCategory(cat_) {
      if (!this.catFilter.includes(cat_)) this.catFilter.push(cat_)
      else {
        const ind_ = this.catFilter.indexOf(cat_)
        if (ind_ > -1) {
          this.catFilter.splice(ind_, 1)
        }
      }
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
