<template>
  <div v-scroll-lock="isWatching">
    <transition-group
      v-if="isEmptySel"
      id="gridProjects"
      :duration="{ enter: 500, leave: 800 }"
      name="card-swap"
      tag="ul"
    >
      <cardboard
        v-for="id_ in displayProjectsId"
        :key="id_"
        :projectid="id_"
        class="item-project"
        @selected="WatchProject"
      />
    </transition-group>
    <div v-else>
      <p>No projects selected! It works!!</p>
    </div>

    <!-- Project frame -->
    <project-frame v-if="isWatching" @close="CloseProject" />
  </div>
  <!-- il faudra rajouter un prevent au dessus si la page nexiste pas!! -->
</template>

<script>
import { mapGetters } from 'vuex'
import Cardboard from '~/components/Cardboard.vue'
import ProjectFrame from '~/components/ProjectFrame.vue'

export default {
  components: {
    Cardboard,
    ProjectFrame
  },
  data() {
    return {
      isWatching: false,
      projectLink: '',
      idToWatch: ''
    }
  },
  computed: {
    isEmptySel() {
      let isEmpt_ = false
      if (this.displayProjectsId.length > 0) {
        isEmpt_ = true
      }
      return isEmpt_
    },
    ...mapGetters({
      displayProjectsId: 'projects/selectedProjectsId'
    })
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    WatchProject(data) {
      this.$store.commit('projects/setCurrentProjectId', data.id)
      this.isWatching = true
    },
    CloseProject() {
      this.isWatching = false
    }
  }
}
</script>

<style lang="scss">
#gridProjects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 80vh;
  align-content: center;

  padding: 0 20px;
}

.background-project {
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100vw;
  min-height: 100vh;
  padding: 30px 0;
  background: transparentize($color: $primary-color, $amount: 0.15);
}

/* ENTER */
.card-swap-enter
/* enter from */ {
  opacity: 0;
  transform: scale(0.5);
}

.card-swap-enter-active {
}

.card-swap-enter-to {
  opacity: 1;
  transform: scale(1);
}

/* MOVE */
.card-swap-move {
  position: relative;
}

/* LEAVE */
.card-swap-leave {
  opacity: 1;
  transform: scale(1);
}

.card-swap-leave-active {
  position: absolute;
}

.card-swap-leave-to
/* .card-swap-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translate(0, 0, 0) scale(0.1);
}
</style>
