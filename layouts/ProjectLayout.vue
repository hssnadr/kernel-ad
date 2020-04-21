<template>
  <div>
    {{ curProject.slug }}
    <nuxt />
  </div>
</template>

<script>
// import HeaderProject from '~/components/LayoutProjectHeader.vue'
import { mapGetters } from 'vuex'

export default {
  // components: {
  //   HeaderProject
  // }
  computed: {
    ...mapGetters({
      curProject: 'projects/getCurProject'
    })
  }
}
</script>
