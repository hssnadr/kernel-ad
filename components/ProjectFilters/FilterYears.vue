<template>
  <div>
    <p>{{ year0 }} - {{ year1 }}</p>

    <input
      data-role="slider"
      data-min="year0"
      data-max="year1"
      data-on-change-value="$('#event-receiver').val('Value: '+arguments[0])"
    />
    <input id="event-receiver" type="text" />

    <button class="btn btn-primary btn-lg">I'm a large Bootstrap button</button>

    <form class="multi-range-field my-5 pb-5">
      <input id="multi19" class="multi-range" type="range" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year0: 1989,
      year1: 2020
    }
  },
  mounted() {
    this.year0 = this.$store.getters['projects/getYears'].year0
    this.year1 = this.$store.getters['projects/getYears'].year1
  }
}
</script>
