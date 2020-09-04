<template>
  <div class="sidenav-container">
    <transition name="button-slide">
      <icon-hbg v-if="!hideSidemenu" id="menu-button" />
    </transition>

    <transition name="slide-side">
      <div
        v-if="isSideMenu"
        id="foo"
        ref="foo"
        class="sidenav"
        :style="{ width: wSideMenu + 'px' }"
      >
        <main-menu></main-menu>
      </div>
    </transition>
  </div>
</template>

<script>
import MainMenu from '~/components/Menu_Content'
import IconHbg from '~/components/Icon_Hamburger'

export default {
  components: { MainMenu, IconHbg },
  computed: {
    isSideMenu() {
      return this.$store.getters['utilities/isSideMenu']
    },
    hideSidemenu() {
      return this.$store.getters['utilities/hideSidemenu']
    },
    wSideMenu() {
      return this.$store.getters['utilities/sideMenuWidthPx']
    }
  }
}
</script>

<style scoped lang="scss">
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav {
  height: 100%;
  background: $base-color;
  /* width: 300px; */
  z-index: 2;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
  padding-top: 100px;
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
</style>
