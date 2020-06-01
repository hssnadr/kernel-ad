<template>
  <div>
    <div class="container-fluid red">
      <h1 class="title">
        KERNEL AD
      </h1>
      <h2 class="subtitle">
        Portfolio
      </h2>
    </div>

    <portfolio-grid />
  </div>
</template>

<script>
import PortfolioGrid from '~/components/PortfolioGrid.vue'

export default {
  components: {
    PortfolioGrid
  },

  data() {
    return {
      curSection: 'portfolio'
    }
  },
  mounted() {
    // Show side bar button
    this.$store.commit('sidemenu/HIDE_SIDEBAR', false)
  }
}
</script>

<style lang="scss">
.title {
  color: $secondary-color;
}
</style>
