<template>
  <div>
    <h4>Empty content</h4>
    <p>{{ project.institute }}</p>
  </div>
</template>

<script>
export default {
  layout: 'ProjectLayout',
  data() {
    return {
      slug: ''
    }
  },
  computed: {
    project() {
      return this.$store.getters['projects/getProjectBySlug'](this.slug)
    }
  },
  created() {
    this.slug = this.$route.params.slug
  }
}
</script>
