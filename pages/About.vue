<template>
  <div id="About">
    <div class="adrienhusson"></div>

    <div class="content">
      <header>
        <ah-logo class="logo"></ah-logo>
      </header>

      <main>
        <h2>Adrien Husson</h2>
        <p class="justify-center">
          French engineer and designer graduated from the Arts et Métiers
          ParisTech and Strate École de Design.
        </p>
        <!-- <logo-ensam /> <logo-strate /> -->
        <p>
          In 2014 he developed the project Guken based on his diploma project
          mixing gesture recognition, sound design and sport training. This
          brought him to work with the CRI and its Movuino technology, where he
          met Joël Chevrier who proposed to him in 2016 to join the initial team
          of the MotionLab. Since then, he has been developing various projects
          exploring the forms and places of digital technologies into learning
          and health paths. He seeks in his creations the sensitive scope of
          digital technologies, exploring the potential of a field which is
          still young and whose sensors and actuators are as many bridges
          between theoretical knowledge, physical practices and creation
          processes.
        </p>
      </main>
    </div>
  </div>
</template>

<script>
import AhLogo from '~/components/ah-logo.vue'
// import CriLogo from '~/components/motionlab/cri-logo.vue'

export default {
  components: {
    AhLogo
    // CriLogo
  },
  mounted() {
    this.$store.commit('navigator/SET_COLORSWAP', false)
    this.$store.commit('sidemenu/SetState', false)
    this.$store.commit('sidemenu/HIDE_SIDEBAR', true)
  }
}
</script>

<style lang="scss">
#About {
  display: flex;
  flex-wrap: wrap;

  .adrienhusson {
    height: 100vh;
    width: 31%;
    background-image: url('~assets/about/AdrienHusson.jpg');
    background-attachment: fixed;
    background-position: -10% 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .content {
    width: 69%;

    header {
      width: 100%;

      .logo {
        display: block;
        width: 80px;
        margin: 15vh auto 0 auto;

        stroke: $primary-color;
        fill: none;
        stroke-width: 3px;

        animation: 1.2s ah-appear linear;
        stroke-dasharray: 270;
      }
    }

    main {
      display: block;
      width: 70%;
      max-width: 900px;
      margin: 0 auto;
      text-align: center;

      h2 {
        font-size: 2rem;
        margin: 2.1rem 0;
      }
    }
  }
}

@keyframes ah-appear {
  0% {
    opacity: 0;
    stroke-dashoffset: 270;
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}
</style>
