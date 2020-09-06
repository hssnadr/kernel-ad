<template>
  <div id="motionlab">
    <header class="motionlab-header justify-center">
      <cri-logo class="logo-cri" />
      <div class="description justify-center">
        <p>
          The <a href="https://www.cri-paris.org" target="_blanck">CRI</a> is
          co-constructing and sharing new ways of learning, teaching, conducting
          research and mobilizing collective intelligence in the fields of life,
          learning and digital sciences, in order to face the world's
          <a
            href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
            target="_blank"
          >
            sustainable development goals (SDGs)</a
          >.
        </p>
        <a
          href="https://www.themotionlab.net/"
          target="_blanck"
          @mouseover="hoverMotionLab = true"
          @mouseleave="hoverMotionLab = false"
        >
          <h3 class="motionlab">
            Motion<span class="ml-yellow">L</span><span class="ml-red">a</span
            ><span class="ml-blue">b</span>
          </h3>
        </a>
        <p>
          After a first professional experience focused on IOT and boxing
          education with
          <nuxt-link to="/projects/guken" target="_blank">GUKEN</nuxt-link>, I
          joined
          <a
            href="https://www.echosciences-grenoble.fr/membres/joel-chevrier"
            target="_blank"
            >Joël Chevrier</a
          >
          to develop a MotionLab at the CRI. This lab was highly impulsed by the
          works of
          <a
            href="https://www.linkedin.com/in/kevinlhoste/?originalSubdomain=fr"
            target="_blank"
            >Kevin Lhoste</a
          >
          with the
          <a href="http://www.movuino.com/" target="_blank">Movuino</a>, an
          open-source motion sensors plateform dedicated to prototype various
          projects. Those 3 years of MotionLab has been a unique experimental
          way to explore practical usages involving gestures, learning and
          digital technologies. This map represents most of the projects I
          developed at the CRI as engineer and designer, and the way they are
          related together.
        </p>
      </div>
    </header>

    <div class="motionlab-container">
      <ah-works />
    </div>
  </div>
</template>

<script>
import AhWorks from '~/components/motionlab/ah-works.vue'
import CriLogo from '~/components/motionlab/cri-logo.vue'

export default {
  components: {
    AhWorks,
    CriLogo
  },
  data() {
    return {
      hoverMotionLab: false
    }
  },
  mounted() {
    // Hide side bar
    this.$store.commit('navigator/SET_COLORSWAP', false)
    this.$store.commit('utilities/SET_SIDEMENU_STATE', false)
    this.$store.commit('utilities/HIDE_SIDEMENU', true)
  }
}
</script>

<style lang="scss">
#motionlab {
  color: $motionlab-black;
}

.motionlab-header {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 3rem auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .logo-cri {
    width: 50%;
    min-width: 300px;
  }

  .description {
    p {
      font-weight: 200;
      margin: 1.5rem 0;
    }

    h3 {
      text-align: center;
      color: $motionlab-black;
      margin: 1.5rem;
      transition: all 0.4s ease-out; //transform 0.4s, filter 0.8s;

      .ml-yellow .ml-red .ml-blue {
        color: $motionlab-black;
      }

      &:hover {
        font-style: italic;
        transform: translateX(-0.25%) scale(1.005);
        @include text-stroke($color: $motionlab-purple, $thikness: 1px);
        filter: drop-shadow(3px 3px 0px transparentize($motionlab-purple, 0.7));
        color: $base-color;

        .ml-yellow {
          color: $motionlab-yellow;
          transition: color 0.5s;
        }
        .ml-red {
          color: $motionlab-red;
          transition: color 1s;
        }
        .ml-blue {
          color: $motionlab-blue;
          transition: color 1.5s;
        }
      }
    }
  }

  // @media #{$small-up} {
  //   width: 70%;
  // }

  // @media #{$medium-up} {
  //   width: 40%;
  // }
}

.motionlab-container {
  width: 100%;
  overflow: hidden;
}
</style>
