<template>
  <div>
    <div class="container-fluid red">
      <logo />
      <h1 class="title">
        KERNEL AD
      </h1>
      <h2 class="subtitle">
        Portfolio
      </h2>
    </div>

    <portfolio v-if="curSection === 'portfolio'" />
    <motionlab v-if="curSection === 'motionlab'" />
    <hitbox v-if="curSection === 'hitbox'" />
    <kernel-error v-if="curSection === 'kernelerror'" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Portfolio from '~/components/indexPortfolio.vue'
import Motionlab from '~/components/indexMotionLab.vue'
import Hitbox from '~/components/indexHitbox.vue'
import KernelError from '~/components/indexKernelError.vue'

export default {
  components: {
    Logo,
    Portfolio,
    Motionlab,
    Hitbox,
    KernelError
  },

  data() {
    return {
      curSection: 'portfolio'
    }
  }
}
</script>

<style>
/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
