<template>
  <div>
    <header style="height: 50px;">
      <!-- logo -->
    </header>
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
    this.$store.commit('navigator/SET_COLORSWAP', false)
    this.$store.commit('sidemenu/HIDE_SIDEBAR', false)
  }
}
</script>

<style lang="scss">
.title {
  color: $secondary-color;
}
</style>
