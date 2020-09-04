<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
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
