<template lang="html">
  <div>
    <button @click="setCategory('Design')">Design</button>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    item: String
  }
}
</script>
