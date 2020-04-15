<template>
  <div class="sidenav-container">
    <div id="overlay" @click="$store.dispatch('sidemenu/toggleSidebar')"></div>

    <transition name="slide-side">
      <div
        v-if="toggleSidebar"
        id="foo"
        ref="foo"
        class="sidenav"
        :style="{ width: menuWidth + 'px' }"
      >
        <!-- <div v-if="toggleSidebar" class="sidenav"> -->
        <p>menuWidth {{ menuWidth }}</p>
        <main-menu></main-menu>
      </div>
    </transition>
  </div>
</template>

<script>
import MainMenu from '~/components/MenuBMain'

export default {
  components: { MainMenu },

  data() {
    return {
      menuWidth: 200, // px
      wdtBrkPoint: 600 // px
    }
  },

  computed: {
    toggleSidebar() {
      return this.$store.getters['sidemenu/toggleSidebar']
    }
    // wSideMenu() {
    //   return this.windowWidth * this.widthFactor
    // }
  },

  mounted() {
    // Add listener
    this.$nextTick(function() {
      window.addEventListener('resize', this.setMenuWidth) // works also for the height!
      this.setMenuWidth() // init listener
    })
  },

  beforeDestroy() {
    // Destroy listeners
    window.removeEventListener('resize', this.setMenuWidth)
  },

  methods: {
    setMenuWidth(event) {
      this.windowWidth = document.documentElement.clientWidth // get window size

      // Set menu width based on screen size
      if (this.windowWidth < this.wdtBrkPoint) {
        this.menuWidth = this.windowWidth
      } else {
        this.menuWidth = 300
      }

      // Register width into store
      this.$store.commit('sidemenu/SetWidth', { width: this.menuWidth })
    }
  }
}
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav {
  height: 100%;
  /* width: 300px; */
  background-color: #56adff;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.5s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

#overlay {
  position: fixed;
  display: block;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  cursor: pointer;
}
</style>
