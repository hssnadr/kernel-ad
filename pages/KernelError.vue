<template>
  <h2>
    Kernel Error
  </h2>
</template>

<script>
export default {
  mounted() {
    // Hide side bar
    this.$store.commit('utilities/SET_SIDEMENU_STATE', false)
    this.$store.commit('utilities/HIDE_SIDEMENU', true)
  }
}
</script>
