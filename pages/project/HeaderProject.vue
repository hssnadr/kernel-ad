<template>
  <div>
    <h2>{{ data.title }}</h2>
    <h3>{{ data.year }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
      useDefaultForNull: true
    }
  }
}
</script>
