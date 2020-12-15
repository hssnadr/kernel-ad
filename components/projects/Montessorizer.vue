<template>
  <div class="montessorizer-project">
    <scene />
  </div>
</template>

<script>
import Scene from './Montessorizer/Scene.vue'

export default {
  components: {
    Scene
  }
}
</script>

<style lang="scss">
.montessorizer-project {
  width: 100vw;
  height: 100vh;
  background: red;
}
</style>
