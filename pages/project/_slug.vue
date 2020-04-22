<template>
  <div>
    <!-- Header information -->
    <h2>{{ project.title }}</h2>
    <h3>{{ project.year }}</h3>
    <p>{{ project.description }}</p>
    <p>{{ project.skills }}</p>

    <!-- Dedicated project page (referenced as component) -->
    <component :is="slug" v-if="isExtComponent"></component>

    <!-- Footer (related project) -->
  </div>
</template>

<script>
export default {
  layout: 'ProjectLayout',
  data() {
    return {
      slug: '',
      isExtComponent: false
    }
  },
  computed: {
    project() {
      return this.$store.getters['projects/getProjectBySlug'](this.slug)
    }
  },
  created() {
    this.slug = this.$route.params.slug
    this.isExtComponent = this.slug in this.$options.components // check if there's a component refering to this project to present it in the project page
  },
  isComponentExist() {
    return this.slug in this.$options.components
  }
}
</script>
