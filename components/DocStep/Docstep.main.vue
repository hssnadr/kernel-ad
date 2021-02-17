<template>
  <div class="docstep-main">
    <doc-gui class="gui" />
    <doc-scene class="scene" />
    <doc-content class="content" />
  </div>
</template>

<script>
import DocGui from './Docstep.gui.vue'
import DocScene from './Docstep.scene.vue'
import DocContent from './Docstep.content.vue'

export default {
  components: {
    DocGui,
    DocScene,
    DocContent
  }
}
</script>

<style lang="scss">
.docstep-main {
  background: lightblue;
  .scene {
    width: 100vw;
    height: 100vh;
  }
}
</style>
