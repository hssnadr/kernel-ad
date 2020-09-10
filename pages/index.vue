<template>
  <div id="portfolio">
    <header>
      <ah-logo class="logo" />
    </header>
    <div class="introduction justify-center">
      <p class="warning">
        This website is a work in progress. I developped it using
        <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> to present my
        works related to design, engineering and art and how they are connected
        together through research approach, articles and papers<span
          v-if="!isReadMore"
          >...
          <b class="toggleRead" @click="toggleReadMore()">Read more</b></span
        ><span v-else>.</span>
      </p>
      <span v-if="isReadMore">
        <p class="warning">
          I believe in the major role that
          <a href="https://en.wikipedia.org/wiki/Open_source" target="_blank"
            >open source</a
          >
          can play in rethinking the industry by addressing future issues,
          especially education, through the ability of digital technologies to
          make resources available to many people. The objective is to
          participate in this movement by offering a complete and accessible
          experience of these projects, from their presentation to their making
          process put into perspective with the theoretical concepts they are
          based on.
        </p>
        <p class="warning">
          It's just a begining, still uncomplete, not really optimized yet and
          this section is especially field with old projects from my
          <a href="https://www.behance.net/adrienhusson" target="_blank"
            >Behance</a
          >
          profile. The
          <nuxt-link to="/motionlab">MotionLab</nuxt-link> section is closer to
          this vision (on laptop/desktop) but it's a long term process to
          achieve it as I really concieve it.
          <b class="toggleRead" @click="toggleReadMore()">Read less</b>
        </p>
      </span>
    </div>

    <portfolio-grid />
  </div>
</template>

<script>
import AhLogo from '~/components/ah-logo.vue'
import PortfolioGrid from '~/components/PortfolioGrid.vue'

export default {
  components: {
    PortfolioGrid,
    AhLogo
  },
  data() {
    return {
      isReadMore: false
    }
  },
  mounted() {
    // Show side bar button
    this.$store.commit('navigator/SET_COLORSWAP', false)
    this.$store.commit('utilities/SET_SIDEMENU_STATE', false)
    this.$store.commit('utilities/HIDE_FILTERS', false)
  },
  methods: {
    toggleReadMore() {
      this.isReadMore = !this.isReadMore
    }
  }
}
</script>

<style lang="scss">
#portfolio {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 2rem;

  .logo {
    display: block;
    width: 80px;
    margin-bottom: 2rem;
  }

  .introduction {
    width: 100%;
    max-width: 1000px;
    margin-bottom: 1rem;

    .toggleRead {
      font-style: normal;
      font-weight: 500;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
