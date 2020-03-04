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
    <!-- <button @click="setFilters()">FILTRER</button> -->
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
        // Categories
        for (let j = 0; j < categories_.length; j++) {
          if (allProj_[i].categories.includes(categories_[j])) {
            filtProj_.push(allProj_[i])
          }
        }
      }

      return filtProj_
    }
    // --> USE THIS TO SET FILTERS ARRAY
    // fullName: {
    //   // getter
    //   get() {
    //     return this.firstName + ' ' + this.lastName
    //   },
    //   // setter
    //   set(newValue) {
    //     const names = newValue.split(' ')
    //     this.firstName = names[0]
    //     this.lastName = names[names.length - 1]
    //   }
    // }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
  // methods: {
  //   filteredMessages() {
  //     console.log(this) // Our Vue component

  //     const filteredMessages = this.allProjects.filter(
  //       // References our Vue Component
  //       (message) => this.allProjects.includes(this.match)
  //     )

  //     return filteredMessages
  //   },
  //   setFilters() {
  //     console.log(this)

  //     this.filtProjects = this.allProjects.filter(function(project_) {
  //       // let isProject_ = true // boolean related to 'project_' filter (true -> project_ is return // false : not return)
  //       // isProject_ = false

  //       // this.debuglog = this.catFilter_
  //       // const category_ = this.catFilter[0]
  //       return project_.includes(this.catFilter[0])

  //       // Filter category
  //       if (this.catFilter.length > 0) {
  //         let i
  //         for (i = 0; i < this.catFilter.length; i++) {
  //           // isProject_ = project_.categories === this.catFilter[i]
  //           // project_.categories.components === this.catFilter[i]
  //           return project_.includes(this.catFilter[i])
  //         }
  //       }

  //       // return isProject_
  //     })
  //   }
  // }
}
</script>

<style>
.item {
  /* background-color: #eee; */
  /* display: inline-block; */
  /* float: left; */
}
</style>
