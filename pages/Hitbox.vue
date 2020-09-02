<template>
  <div id="hitbox-page">
    <header class="hitbox-background1">
      <hitbox-logo ref="hbxlogo" class="hitbox-logo" />
    </header>

    <!-- VIDEO -->
    <div class="iframe-container">
      <iframe
        src="https://player.vimeo.com/video/450028533?muted=1&?autoplay=1&title=0&byline=0&portrait=0"
        class="responsive-iframe"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>

    <!-- <div class="hitbox-background2"></div> -->

    <div class="overview justify-center hitbox-background2">
      <div class="color-background">
        <div class="content">
          <cri-logo class="cri-logo" />
          <p>
            Hitbox was developed at the Center for Research and
            Interdisciplinarity (CRI) based in Paris. This laboratory
            experiments and spreads new ways of learning, teaching, conducting
            research and mobilizing collective intelligence in life, learning
            and digital sciences.
          </p>
          <p>
            With Hitbox, the former purpose is to explore ways to interact with
            technologies in an education process involving the body. Connecting
            several Hitbox together allows to create innovative boxing scenarios
            where beginners interact with each others without risk of injuries.
            The integrated and interactive screen drive their learning through
            specific scenarios addressing specific aspect of boxing: movement,
            reactivity, strength…
          </p>
          <p>
            Based on a crossed approach research / design / engineering, Hitbox
            is now dedicated to explore new interaction by developing various
            immersive and tangible digital spaces for any kind of application:
            health, communication, events…
          </p>
        </div>
      </div>
    </div>

    <div class="hitbox-background3"></div>
    <div class="hitbox-background4"></div>
    <div class="hitbox-background5"></div>

    <!-- <div
      v-for="index in 5"
      :key="index"
      :class="'hitbox-background' + index"
    ></div> -->
  </div>
</template>

<script>
import HitboxLogo from '~/components/hitbox/hitbox-logo.vue'
import CriLogo from '~/components/motionlab/cri-logo.vue'

export default {
  components: {
    HitboxLogo,
    CriLogo
  },
  data() {
    return {
      windowHeight: 0,
      scrollY: 0
    }
  },
  mounted() {
    // Hide side bar
    this.$store.commit('navigator/SET_COLORSWAP', true)
    this.$store.commit('sidemenu/SetState', false)
    this.$store.commit('sidemenu/HIDE_SIDEBAR', true)

    // Window resize listener
    this.$nextTick(function() {
      window.addEventListener('resize', this.windowResize)
      this.windowResize()
    })

    // Scroll listener
    this.$nextTick(function() {
      window.addEventListener('scroll', this.scrollEvent)
      this.scrollEvent()
    })
  },
  methods: {
    scrollEvent(event) {
      this.scrollY = window.scrollY

      // Header logo
      let viewOnHeader_ = this.scrollY / this.windowHeight
      if (Math.abs(viewOnHeader_) > 0.5) {
        viewOnHeader_ = 0.5
      }
      viewOnHeader_ = 2 * viewOnHeader_
      this.$refs.hbxlogo.setAnimProg(1 - viewOnHeader_)
    },
    windowResize(event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  }
}
</script>

<style lang="scss">
#hitbox-page {
  header {
    background-image: url('~assets/hitbox/pics/Hitbox1.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .hitbox-logo {
      width: 60%;
    }
  }

  @for $i from 1 through 5 {
    .hitbox-background#{$i} {
      @extend header;
      background-image: url('~assets/hitbox/pics/Hitbox#{$i}.jpg');
    }
  }

  .overview {
    width: 100%;
    min-height: 180vh;
    // background: $primary-color;
    // color: $base-color;

    .color-background {
      width: 100%;
      height: 100%;
      background: transparentize($color: #fff, $amount: 0.2);
      display: flex;
      justify-content: center;
      align-items: center;

      .content {
        width: 50%;
        // margin: 0 auto;
        // padding: 50px 0;

        .cri-logo {
          display: block;
          width: 400px;
          margin: 0 auto 4rem auto;
        }

        p {
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>
