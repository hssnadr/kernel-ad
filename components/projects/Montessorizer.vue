<template>
  <div class="montessorizer-project">
    {{ mavar }}
    <scene />
  </div>
</template>

<script>
import Scene from './Montessorizer/Scene.vue'

export default {
  components: {
    Scene
  },
  data() {
    return {
      mavar: 'to'
    }
  },
  created() {
    this.$nuxt.$on('ONFOCUS-THREEJS', this.setCurFocus)
  },
  beforeDestroy() {
    this.$nuxt.$off('ONFOCUS-THREEJS')
  },
  methods: {
    setCurFocus(obj_) {
      if (Object.prototype.hasOwnProperty.call(obj_, 'name')) {
        this.mavar = obj_.name
      }
    }
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
