<template>
  <div>
    <div v-for="(skl_, index) in allSkills" :key="index">
      <button @click="setSkill(skl_)">
        <i>{{ skl_ }}</i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    allSkills: 'projects/allSkills'
  }),
  methods: {
    setSkill(skl_) {
      this.$store.commit('projects/setSkill', skl_)
    }
  }
}
</script>
