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
      <p v-for="(prj_, indx) in displayProjects" :key="indx">
        {{ prj_.title }} {{ prj_.skills }}
      </p>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <h3>FILTERS</h3>
    <fields></fields>
    <skills></skills>
    <h3>MASONRY</h3>
    <no-ssr class="container-fluid">
      <div
        v-if="isEmptySel"
        v-masonry
        transition-duration=".5s"
        item-selector=".item"
        class="masonry-container"
        style="background-color: #f00"
      >
        <Cardboard
          v-for="(prj_, index) in displayProjects"
          :key="index"
          v-masonry-tile
          class="item"
          :item="prj_"
          @selected="DisplayProject"
        />
      </div>
      <div v-else>
        <p>No projects selected! It works!!</p>
      </div>
    </no-ssr>
    <div v-if="isWatching" id="myModal" class="modal">
      <span class="close" @click="CloseProject">&times;</span>
      <!-- <input type="button" :value="linkProject" @click="CloseProject" /> -->
      <iframe
        id="myiframe"
        height="80%"
        width="80%"
        :src="linkProject"
      ></iframe>
    </div>
  </div>
  <!-- il faudra rajouter un prevent au dessus si la page nexiste pas!! -->
</template>

<script>
import { mapGetters } from 'vuex'
import NoSSR from 'vue-no-ssr'
import Logo from '~/components/Logo.vue'
import Fields from '~/components/FilterFields.vue'
import Skills from '~/components/FilterSkills.vue'
import Cardboard from '~/components/Cardboard.vue'

export default {
  components: {
    'no-ssr': NoSSR,
    Logo,
    Fields,
    Skills,
    Cardboard
  },
  data() {
    return {
      isWatching: false,
      currentProject: null,
      linkProject: ''
    }
  },
  computed: {
    isEmptySel() {
      let isEmpt_ = false
      if (this.displayProjects.length > 0) {
        isEmpt_ = true
      }
      return isEmpt_
    },
    ...mapGetters({
      displayProjects: 'projects/filteredProjects'
    })
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    DisplayProject(data) {
      // if NOT smartphone
      this.linkProject = '/projects/' + data.project.slug
      this.currentProject = data
      this.isWatching = true

      // if smartphone -> something like: window.location.href = '...
    },
    CloseProject() {
      this.isWatching = false
    }
  }
}
</script>

<style>
.item {
  /* background-color: #eee; */
  /* display: inline-block; */
  /* float: left; */
}

iframe#myiframe {
}

.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
