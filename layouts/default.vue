<template>
  <div>
    <div class="container col-xl-8 col-md-4 col-sm-12">
      <side-menu />
    </div>

    <p style="text-align: right;">menuWidth {{ menuWidth }}</p>

    <div id="main" v-scroll-lock="isLockMainScroll" :style="mainMarginLeft">
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
    isMenuHover() {
      return this.$store.getters['sidemenu/isHover']
    },
    mainMarginLeft() {
      if (this.toggleSidebar && !this.isMenuHover) {
        let ml_ = this.menuWidth.toString()
        ml_ = ml_.concat('px')
        return { 'margin-left': ml_ }
      } else {
        return { 'margin-left': '0px' }
      }
    },
    isLockMainScroll() {
      // Scroll in the main vue is locked when menu is hover it
      let lck_ = false
      if (this.toggleSidebar && this.isMenuHover) {
        lck_ = true
      }
      return lck_
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

#main {
  transition: all 0.5s ease-out;
  margin-left: 0px;
  padding: 16px;
  background-color: rgb(151, 255, 177);
  position: auto;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
