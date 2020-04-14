<template>
  <div>
    C'est le main menu B)
    <h3>FILTERS</h3>
    <fields></fields>
    <skills></skills>
  </div>
</template>

<script>
import Fields from '~/components/FilterFields.vue'
import Skills from '~/components/FilterSkills.vue'

export default {
  components: {
    Fields,
    Skills
  }
}
</script>
