<template>
  <h2>
    MotionLab
    <ah-works />
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
