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
    <div v-for="(cat_, index) in allFields" :key="index">
      <button @click="setCategory(cat_)">
        <i>{{ cat_ }}</i>
      </button>
    </div>
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
      selFields: []
    }
  },
  computed: {
    allProjects() {
      return this.$store.state.projects.all
    },
    allFields() {
      const allPrj_ = this.allProjects
      const allFld_ = []

      for (let i = 0; i < allPrj_.length; i++) {
        if (allPrj_[i].fields.length > 0) {
          for (let j = 0; j < allPrj_[i].fields.length; j++) {
            const cat_ = allPrj_[i].fields[j]
            if (!allFld_.includes(cat_)) {
              allFld_.push(cat_)
            }
          }
        }
      }
      return allFld_
    },
    filteredProjects() {
      const allPrj_ = this.allProjects
      const selFld_ = this.selFields
      let filtPrj_ = []

      // Filter all projects
      for (let i = 0; i < allPrj_.length; i++) {
        // by statue
        // by fields
        if (selFld_.length > 0) {
          for (let j = 0; j < selFld_.length; j++) {
            // by tags
            if (allPrj_[i].fields.includes(selFld_[j])) {
              filtPrj_.push(allPrj_[i])
            }
          }
        }
      }

      // If no project selected return all projects
      if (filtPrj_.length === 0) {
        filtPrj_ = allPrj_
      }

      return filtPrj_
    }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    setField(fld_) {
      if (!this.selFields.includes(fld_)) {
        this.selFields.push(fld_)
      } else {
        const ind_ = this.selFields.indexOf(fld_)
        this.selFields.splice(ind_, 1)
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
