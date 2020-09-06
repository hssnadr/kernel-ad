<template>
  <div id="main-layout" :style="setMargin">
    <side-menu />
    <site-navigator v-if="!isSideMenuHover" class="navigator" />
    <div v-scroll-lock="isScrollLock">
      <nuxt />
    </div>
  </div>
</template>

<script>
import SideMenu from '~/components/Menu_Container'
import SiteNavigator from '~/components/Navigator'

export default {
  components: {
    SideMenu,
    SiteNavigator
  },
  computed: {
    menuWidth() {
      return this.$store.getters['utilities/sideMenuWidthPx']
    },
    isSideMenu() {
      return this.$store.getters['utilities/isSideMenu']
    },
    isSideMenuHover() {
      return this.$store.getters['utilities/isSideMenuHover']
    },
    isScrollLock() {
      if (this.isSideMenu && this.isSideMenuHover) {
        return true
      } else {
        return false
      }
    },
    setMargin() {
      if (this.isSideMenu && !this.isSideMenuHover) {
        let ml_ = this.menuWidth.toString()
        ml_ = ml_.concat('px')
        return { 'margin-left': ml_ }
      } else {
        return { 'margin-left': '0px' }
      }
    }
  },
  mounted() {
    // Set initial window width
    this.$store.commit(
      'utilities/SET_WINDOW_WIDTH',
      document.documentElement.clientWidth
    )

    // // Add listener on window width
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth() // init listener
    })
  },
  beforeDestroy() {
    // Destroy listeners
    window.removeEventListener('resize', this.getWindowWidth)
  },
  methods: {
    getWindowWidth(event) {
      this.$store.commit(
        'utilities/SET_WINDOW_WIDTH',
        document.documentElement.clientWidth
      )
    }
  }
}
</script>

<style lang="scss">
#main-layout {
  transition: margin-left 0.5s ease-out;
  margin-left: 0px;
  padding: 0px;
  background: $base-color;

  .navigator {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 8000;
    width: 80%;
  }
}
</style>
