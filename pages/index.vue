<template>
  <div id="index">
    <header>
      <ah-logo class="logo" />
    </header>
    <portfolio-grid />
  </div>
</template>

<script>
import AhLogo from '~/components/ah-logo.vue'
import PortfolioGrid from '~/components/PortfolioGrid.vue'

export default {
  components: {
    PortfolioGrid,
    AhLogo
  },

  data() {
    return {
      curSection: 'portfolio'
    }
  },
  mounted() {
    // Show side bar button
    this.$store.commit('navigator/SET_COLORSWAP', false)
    this.$store.commit('utilities/HIDE_SIDEMENU', false)
  }
}
</script>

<style lang="scss">
#index {
  .logo {
    display: block;
    width: 80px;
    margin: 100px auto 80px auto;
  }
}
</style>
