<template>
  <div>
    <!-- Header information -->
    <h2>{{ project.title }}</h2>
    <h3>{{ project.year }}</h3>
    <p>{{ project.description }}</p>
    <p>{{ project.skills }}</p>

    <!-- Dedicated project page (referenced as component) -->
    <component :is="id" v-if="isExtComponent"></component>

    <!-- Footer (related project) -->
  </div>
</template>

<script>
export default {
  layout: 'ProjectLayout',
  data() {
    return {
      id: '',
      isExtComponent: false
    }
  },
  computed: {
    project() {
      return this.$store.getters['projects/getProjectByid'](this.id)
    }
  },
  created() {
    this.id = this.$route.params.id
    this.isExtComponent = this.id in this.$options.components // check if there's a component refering to this project to present it in the project page
  },
  isComponentExist() {
    return this.id in this.$options.components
  }
}
</script>
