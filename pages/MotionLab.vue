<template>
  <h2>
    MotionLab
    <div class="motionlab-container">
      <ah-works />
    </div>
  </h2>
</template>

<script>
import AhWorks from '~/components/motionlab/ah-works.vue'

export default {
  components: {
    AhWorks
  },
  mounted() {
    // Hide side bar
    this.$store.commit('sidemenu/SetState', false)
    this.$store.commit('sidemenu/HIDE_SIDEBAR', true)
  }
}
</script>

<style lang="scss">
.motionlab-container {
  width: 100%;
  // padding: 0 250px;
}
</style>
