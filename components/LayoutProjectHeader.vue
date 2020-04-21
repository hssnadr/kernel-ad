<template>
  <div>
    <h2>{{ projectData.title }}</h2>
    <h3>{{ projectData.year }}</h3>
    <p>{{ projectData.description }}</p>
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    projectData() {
      return this.$store.getters['projects/getCurProject']
    }
  }
}
</script>
