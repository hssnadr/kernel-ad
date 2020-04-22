<template>
  <div class="sidenav-container">
    <div id="overlay" @click="$store.dispatch('sidemenu/toggleSidebar')"></div>

    <transition name="slide-side">
      <div
        v-if="isSidebar"
        id="foo"
        ref="foo"
        class="sidenav"
        :style="{ width: wSideMenu + 'px' }"
      >
        <!-- <div v-if="toggleSidebar" class="sidenav"> -->
        <p>wSideMenu {{ wSideMenu }}</p>
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
      windowWidth: 0,
      widthFactor0: 0.3,
      widthFactor: 0.3,
      breakpoint: 600
    }
  },

  computed: {
    isSidebar() {
      return this.$store.getters['sidemenu/isSidebar']
    },
    wSideMenu() {
      return this.windowWidth * this.widthFactor
    }
  },

  mounted() {
    // Add listener
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth) // works also for the height!
      this.getWindowWidth() // init listener
    })
  },

  beforeDestroy() {
    // Destroy listeners
    window.removeEventListener('resize', this.getWindowWidth)
  },

  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth

      if (this.windowWidth < this.breakpoint) {
        this.widthFactor = 1.0
      } else {
        this.widthFactor = this.widthFactor0
      }

      const w_ = this.windowWidth * this.widthFactor
      // this.$emit('resizeTo', { width: w_, factor: this.widthFactor })
      this.$store.commit('sidemenu/SetWidth', {
        width: w_,
        factor: this.widthFactor
      })
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
