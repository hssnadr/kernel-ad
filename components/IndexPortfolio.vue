<template>
  <div>
    <div class="container col-12 col-md-8" style="background-color:red;">
      <div class="row">
        <div class="col-md">
          One of three columns
        </div>
        <div class="col-md">
          One of three columns
        </div>
        <div class="col-md">
          One of three columns
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-8" style="background-color:green;">
        .col-12 .col-md-8
      </div>
      <div class="col-12 col-md-4" style="background-color:blue;">
        .col-6 .col-md-4
      </div>
    </div>

    <!-- FLEX BOX -->
    <transition-group
      v-if="isEmptySel"
      id="gridProjects"
      :duration="{ enter: 500, leave: 800 }"
      name="card"
      tag="ul"
    >
      <Cardboard
        v-for="prj_ in displayProjects"
        :key="prj_.slug"
        class="itemProject"
        :item="prj_"
        @selected="DisplayProject"
      />
    </transition-group>
    <div v-else>
      <p>No projects selected! It works!!</p>
    </div>

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
import Cardboard from '~/components/Cardboard.vue'

export default {
  components: {
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
#gridProjects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  min-height: 80vh;
  align-content: center;

  padding: 20px;

  background-color: #fff9a8;
}

.itemProject {
  width: 250px;
  margin: 5px;
  align-self: center; /* alignement axe secondaire */
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
