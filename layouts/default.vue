<template>
  <div id="mainview" :style="setMargin">
    <logo />
    <nav id="navigator">
      <h1>
        <NuxtLink to="/">
          Portfolio
        </NuxtLink>
      </h1>

      <h1 @click="clsSideBar()">
        <NuxtLink to="/MotionLab">
          MotionLab
        </NuxtLink>
      </h1>

      <h1 @click="clsSideBar()">
        <NuxtLink to="/Hitbox">
          Hitbox
        </NuxtLink>
      </h1>

      <h1 @click="clsSideBar()">
        <NuxtLink to="/KernelError">
          Kernel Error
        </NuxtLink>
      </h1>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
    setMargin() {
      if (this.isSidebar && !this.isHover) {
        let ml_ = this.menuWidth.toString()
        ml_ = ml_.concat('px')

        return { 'margin-left': ml_ }
      } else {
        return { 'margin-left': '0px' }
      }
    }
  },
  methods: {
    clsSideBar() {
      this.$store.commit('sidemenu/SetState', false)
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#navigator {
  display: flex;
  justify-content: space-around;
}

#mainview {
  transition: margin-left 0.5s ease-out;
  margin-left: 0px;
  padding: 16px;
  background-color: red;
  box-sizing: border-box;
}
</style>
