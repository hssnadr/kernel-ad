<template>
  <div id="About">
    <div class="adrienhusson-1"></div>

    <div class="content">
      <header>
        <ah-logo class="logo"></ah-logo>
      </header>

      <main>
        <h2>Adrien Husson</h2>
        <div class="justify-center">
          <p>
            French engineer and designer graduated from the Arts et Métiers
            ParisTech and Strate École de Design.
          </p>
          <p>
            In 2014 I developed the project
            <nuxt-link to="/projects/guken" target="_blank">GUKEN</nuxt-link>
            based on my diploma project,
            <nuxt-link to="/projects/whooshing-machine" target="_blank"
              >Whooshing Machine</nuxt-link
            >, mixing gesture recognition, sound design and sport training. This
            brought me to work with the
            <a href="https://www.cri-paris.org" target="_blank">CRI</a> and its
            <a href="http://www.movuino.com/" target="_blank">Movuino</a>
            technology. There I met
            <a
              href="https://www.echosciences-grenoble.fr/membres/joel-chevrier"
              target="_blank"
              >Joël Chevrier</a
            >
            who proposed me to join the initial team of the
            <a href="https://www.themotionlab.net/" target="_blank"
              >MotionLab</a
            >
            in 2016.
          </p>
          <p>
            Since then, I've been developing
            <nuxt-link to="/motionlab" target="_blank"
              >various projects</nuxt-link
            >
            exploring the forms and places of digital technologies into learning
            and health paths. I seek in my creations the sensitive scope of
            digital technologies, exploring the potential of a field which is
            still young and whose sensors and actuators are as many bridges
            between theoretical knowledges, physical practices and creation
            processes.
          </p>
        </div>
        <div class="link-networks">
          <a href="https://github.com/hssnadr/" target="_blank"
            ><icon-github class="icon-link"
          /></a>
          <a href="https://www.linkedin.com/in/adrienhusson/" target="_blank"
            ><icon-linkedin class="icon-link"
          /></a>
          <a href="https://www.instagram.com/hssnadr/" target="_blank"
            ><icon-instagram class="icon-link"
          /></a>
          <a href="https://vimeo.com/user16384712" target="_blank"
            ><icon-vimeo class="icon-link"
          /></a>
          <a href="https://www.behance.net/adrienhusson" target="_blank"
            ><icon-behance class="icon-link"
          /></a>
        </div>
      </main>

      <!-- <logo-strate class="cri-logo" />
        <cri-logo class="cri-logo" /> -->
      <!-- <div class="contact">
        <contact-form />
      </div> -->

      <img
        src="~assets/about/AdrienHusson2.jpg"
        class="adrienhusson-2"
        alt="adrienhusson"
      />
    </div>
  </div>
</template>

<script>
import AhLogo from '~/components/ah-logo.vue'
// import CriLogo from '~/components/motionlab/cri-logo.vue'
// import ContactForm from '~/components/contact-form.vue'
import IconLinkedin from '~/components/icons/icon-linkedin.vue'
import IconInstagram from '~/components/icons/icon-instagram.vue'
import IconGithub from '~/components/icons/icon-github.vue'
import IconVimeo from '~/components/icons/icon-vimeo.vue'
import IconBehance from '~/components/icons/icon-behance.vue'

export default {
  components: {
    AhLogo,
    // CriLogo,
    // ContactForm,
    IconLinkedin,
    IconInstagram,
    IconGithub,
    IconVimeo,
    IconBehance
  },
  mounted() {
    this.$store.commit('navigator/SET_COLORSWAP', false)
    this.$store.commit('utilities/SET_SIDEMENU_STATE', false)
    this.$store.commit('utilities/HIDE_FILTERS', true)
  }
}
</script>

<style lang="scss">
#About {
  display: flex;
  flex-direction: row-reverse;

  .adrienhusson-1 {
    display: none;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 25%;
    background-image: url('~assets/about/AdrienHusson.jpg');
    background-position: top 50% right 35%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content {
    width: 100%;

    header {
      width: 100%;

      .logo {
        display: block;
        width: 80px;
        margin: 15vh auto 0 auto;
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

      p {
        margin: 1rem 0;
      }

      .link-networks {
        display: block;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
      }
    }
    .adrienhusson-2 {
      width: 100%;
      margin: 2.1rem 0;
      @media #{$small-up} {
        display: none;
      }
    }
  }

  @media #{$small-up} {
    .adrienhusson-1 {
      display: block;
      width: 25%;
      background-position: 50% 50%;
    }
    .content {
      width: 75%;
      margin-left: 25%;
    }
  }
  @media #{$medium-up} {
    .adrienhusson-1 {
      width: 25%;
      background-position: 50% 50%;
    }
    .content {
      width: 75%;
      margin-left: 25%;
    }
  }
  @media #{$large-up} {
    .adrienhusson-1 {
      width: 31%;
      background-position: right;
    }
    .content {
      width: 69%;
      margin-left: 31%;
    }
  }
}
</style>
