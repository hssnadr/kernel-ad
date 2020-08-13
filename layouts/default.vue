<template>
  <div id="mainview" :style="setMargin">
    <side-menu />

    <nav id="navigator" v-scroll-lock="isScrollLock">
      <NuxtLink to="/">
        Portfolio
      </NuxtLink>

      <NuxtLink to="/MotionLab">
        MotionLab
      </NuxtLink>

      <NuxtLink to="/Hitbox">
        Hitbox
      </NuxtLink>

      <!-- <h1>
        <NuxtLink to="/KernelError">
          Kernel Error
        </NuxtLink>
      </h1> -->
    </nav>

    <nuxt />
  </div>
</template>

<script>
import SideMenu from '~/components/Menu_Container'

export default {
  components: {
    SideMenu
  },
  computed: {
    menuWidth() {
      return this.$store.getters['sidemenu/widthPx']
    },
    isSidebar() {
      return this.$store.getters['sidemenu/isSidebar']
    },
    isHover() {
      return this.$store.getters['sidemenu/isHover']
    },
    isScrollLock() {
      if (this.isSidebar && this.isHover) {
        return true
      } else {
        return false
      }
    },
    setMargin() {
      if (this.isSidebar && !this.isHover) {
        let ml_ = this.menuWidth.toString()
        ml_ = ml_.concat('px')

        return { 'margin-left': ml_ }
      } else {
        return { 'margin-left': '0px' }
      }
    }
  }
}
</script>

<style lang="scss">
#navigator {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
  font-size: 1.2rem;

  a {
    margin: 1rem 0 1rem 1em;
  }
}

#mainview {
  transition: margin-left 0.5s ease-out;
  margin-left: 0px;
  padding: 0px;
}
</style>
