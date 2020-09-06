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

    <div class="overview justify-center hitbox-background2">
      <div ref="overview" class="background-hover" :style="styleOveriew">
        <cri-logo class="cri-logo" />
        <div class="content">
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
            immersive and tangible digital spaces for any kind of application.
          </p>
        </div>
        <div class="logos-institutes">
          <img
            src="~assets/logos/universite-paris.svg"
            alt="logo-universite-paris"
          />
          <img
            src="~assets/logos/investissement-avenir.svg"
            alt="logo-investissement-avenir"
          />
          <img
            src="~assets/logos/paris-descartes.svg"
            class="paris-descartes"
            alt="logo-paris-descartes"
          />
        </div>
      </div>
    </div>

    <div class="hitbox-background3"></div>

    <div class="documentation">
      <div class="background">
        <div class="content">
          <h3>Documentation is coming</h3>
          <p>Ressources are already available on Github</p>
          <div class="making"></div>
          <div class="template"></div>
        </div>
      </div>
    </div>

    <div class="hitbox-background4"></div>
    <div class="hitbox-background5"></div>
  </div>
</template>

<script>
import HitboxLogo from '~/components/hitbox/hitbox-logo.vue'
import CriLogo from '~/components/hitbox/cri-logo-white.vue'

export default {
  components: {
    HitboxLogo,
    CriLogo
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      scrollY: 0,
      yOverview: 0
    }
  },
  computed: {
    styleOveriew() {
      let viewOnOverview_ =
        1 -
        (this.yOverview + this.windowHeight - this.scrollY) /
          (2 * this.windowHeight)
      if (Math.abs(viewOnOverview_) > 1) {
        viewOnOverview_ = 1 // constrain value (max)
      }

      if (this.windowWidth > 500) {
        viewOnOverview_ = 1.2 * viewOnOverview_ - 0.5 // offset value
      } else {
        viewOnOverview_ = 1.0 * viewOnOverview_ - 0.1 // offset value on smartphone
      }

      if (viewOnOverview_ < 0) {
        viewOnOverview_ = 0 // constrain value (min)
      }
      return { background: 'rgba(0,0,0,' + viewOnOverview_ + ')' }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowResize)
    window.removeEventListener('scroll', this.scrollEvent)
  },
  mounted() {
    // Hide side bar
    this.$store.commit('navigator/SET_COLORSWAP', true)
    this.$store.commit('utilities/SET_SIDEMENU_STATE', false)
    this.$store.commit('utilities/HIDE_FILTERS', true)

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
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight

      // Overview position
      this.yOverview =
        this.$refs.overview.getBoundingClientRect().top + window.scrollY
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
    background-size: auto 100%;

    min-height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .hitbox-logo {
      display: block;
      width: 90%;
    }

    @media #{$medium-up} {
      background-size: cover;
      .hitbox-logo {
        width: 60%;
      }
    }
  }

  @for $i from 1 through 5 {
    .hitbox-background#{$i} {
      @extend header;
      background-image: url('~assets/hitbox/pics/Hitbox#{$i}.jpg');

      @if $i == 3 {
        background-position: 10% center;
        @media #{$medium-up} {
          background-position: center;
        }
        @media #{$small-up} {
          background-position: 15% center;
        }
      }
      @if $i == 4 {
        background-position: 25% center;
        @media #{$medium-up} {
          background-position: center;
        }
        @media #{$small-up} {
          background-position: 30% center;
        }
      }
      @if $i == 5 {
        background-position: 45% center;
        @media #{$small-up} {
          background-position: center;
        }
      }
    }
  }

  .documentation {
    background: #e9e9e9;

    .background {
      @extend header;
      background-image: url('~assets/hitbox/visuals/HITBOX_WhitePreview.jpg');
      background-position: left 0% bottom 0%;
      height: 120vh;
      background-attachment: scroll;
      background-size: 350% auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .content {
        width: 100%;
        padding: 3rem;
        text-align: center;
      }

      @media #{$small-up} {
        height: 100vh;
        background-attachment: fixed;
        background-size: auto 100%;
        justify-content: center;
        align-items: flex-end;

        .content {
          width: 60%;
        }
      }
      @media #{$small-up} {
        .content {
          width: 80%;
          padding: 3rem;
        }
      }
    }
  }

  .overview {
    width: 100%;
    min-height: 220vh;
    color: $base-color;

    .background-hover {
      width: 100%;
      height: 100%;
      min-height: 220vh; // should be useless (defined by parent .overview)

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-content: center;
      align-items: center;

      .cri-logo {
        display: block;
        width: 75%;
        max-width: 420px;
        margin: 0 auto 4rem auto;
        opacity: 1;
      }

      .content {
        width: 90%;
        @media #{$small-up} {
          width: 80%;
        }
        @media #{$medium-up} {
          width: 55%;
        }

        p {
          margin-bottom: 2rem;
          filter: drop-shadow(2px 2px 1px #000);
        }
      }

      .logos-institutes {
        width: 100%;
        padding: 0 10%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 2rem;

        img {
          width: 40%;
          margin-bottom: 20px;
          height: auto;
        }
        .paris-descartes {
          width: 90%;
        }

        @media #{$small-up} {
          flex-wrap: nowrap;
          justify-content: center;
          padding-bottom: 18vh;
          img {
            height: 100px;
            width: auto;
          }
          .paris-descartes {
            width: auto;
          }
        }
        @media #{$medium-up} {
          img {
            height: 90px;
          }
        }
      }
    }
  }
}
</style>
