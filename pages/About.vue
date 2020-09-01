<template>
  <div>
    <p>
      Adrien Husson is a French engineer and designer graduated from the Arts et
      Métiers ParisTech and Strate École de Design. In 2014 he developed the
      project Guken based on his diploma project mixing gesture recognition,
      sound design and sport training. This brought him to work with the CRI and
      its Movuino technology, where he met Joël Chevrier who proposed to him in
      2016 to join the initial team of the MotionLab. Since then, he has been
      developing various projects exploring the forms and places of digital
      technologies into learning and health paths. He seeks in his creations the
      sensitive scope of digital technologies, exploring the potential of a
      field which is still young and whose sensors and actuators are as many
      bridges between theoretical knowledge, physical practices and creation
      processes.
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('navigator/SET_COLORSWAP', false)
  }
}
</script>

<style lang="scss"></style>
