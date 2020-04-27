<template>
  <div>
    <h4 class="filter-type">{{ type }}</h4>
    <li v-for="filter in filters" :key="filter" class="filter-name">
      {{ filter }}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'filter',
      required: true
    }
  },
  computed: {
    filters() {
      return this.$store.getters['projects/getAllFiltersByType'](this.type)
    }
  }
}
</script>

<style>
.filter-section {
  text-transform: capitalize;
}

.filter-name:hover {
  font-weight: bold;
}
</style>
