<template>
  <div>
    <side-menu />
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
import SideMenu from '~/components/MenuASide'
import PortfolioGrid from '~/components/PortfolioGrid.vue'

export default {
  components: {
    SideMenu,
    PortfolioGrid
  },

  data() {
    return {
      curSection: 'portfolio'
    }
  }
}
</script>

<style>
/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
