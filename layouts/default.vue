<template>
  <div>
    <side-menu />
    <div id="portfolio" :style="setMargin">
      <nuxt />
    </div>
  </div>
</template>

<script>
import SideMenu from '~/components/MenuASide'

export default {
  components: {
    SideMenu
  },

  computed: {
    menuWidth() {
      return this.$store.getters['sidemenu/widthPx']
    },

    toggleSidebar() {
      return this.$store.getters['sidemenu/toggleSidebar']
    },
    setMargin() {
      if (this.toggleSidebar) {
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

#portfolio {
  transition: margin-left 0.5s ease-out;
  margin-left: 0px;
  padding: 16px;
  background-color: red;
  box-sizing: border-box;
}
</style>
