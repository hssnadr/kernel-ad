<template>
  <div class="sidenav-container">
    <transition name="button-slide">
      <icon-hbg v-if="isMenuDisplayed" id="menu-button" />
    </transition>

    <transition name="slide-side">
      <div
        v-if="isMenuOpen"
        id="foo"
        ref="foo"
        class="sidenav"
        :style="{ width: wSideMenu + 'px' }"
      >
        <div v-if="isSideMenuHover" class="site-navigator">
          <!-- Small screens only -->
          <site-navigator />
        </div>
        <div v-if="!hidePortfolioFilters" class="portfolio-filters">
          <portfolio-filters />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import PortfolioFilters from '~/components/PortfolioFilters'
import IconHbg from '~/components/Icon_Hamburger'
import SiteNavigator from '~/components/Navigator'

export default {
  components: {
    PortfolioFilters,
    IconHbg,
    SiteNavigator
  },
  computed: {
    isMenuOpen() {
      return this.$store.getters['utilities/isSideMenu']
    },
    wSideMenu() {
      return this.$store.getters['utilities/sideMenuWidthPx']
    },
    isSideMenuHover() {
      return this.$store.getters['utilities/isSideMenuHover']
    },
    hidePortfolioFilters() {
      return this.$store.getters['utilities/hidePortfolioFilters']
    },
    isMenuDisplayed() {
      if (this.isSideMenuHover || !this.hidePortfolioFilters) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.sidenav-container {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  z-index: 7000;

  .portfolio-filters {
    margin-top: 50px;
  }

  .sidenav {
    height: 100vh;
    width: 100%;
    background: $base-color;
    overflow: auto;
    // z-index: 7000;
    box-sizing: border-box;
    padding: 30px;
    padding-top: 50px;
  }

  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.5s ease-out;
  }
  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }

  #menu-button {
    position: fixed;
    display: block;
    top: 1rem;
    left: 2rem;
    z-index: 3;
    cursor: pointer;
    // transform: translateY(-25%);
  }

  .button-slide-enter-active,
  .button-slide-leave-active {
    transition: all 0.3s ease-out;
  }
  .button-slide-enter,
  .button-slide-leave-to {
    transform: translateX(-250%);
  }
}
</style>
