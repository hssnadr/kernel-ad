<template>
  <div>
    <!-- <header id="hitbox-header"></header> -->
    <div
      v-for="index in 5"
      :key="index"
      :class="'hitbox-background' + index"
    ></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Hide side bar
    this.$store.commit('navigator/SET_COLORSWAP', true)
    this.$store.commit('sidemenu/SetState', false)
    this.$store.commit('sidemenu/HIDE_SIDEBAR', true)
  }
}
</script>

<style lang="scss">
#hitbox-header {
  background-image: url('~assets/hitbox/pics/Hitbox1.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: $base-color;
}

@for $i from 1 through 5 {
  .hitbox-background#{$i} {
    @extend #hitbox-header;
    background-image: url('~assets/hitbox/pics/Hitbox#{$i}.jpg');
  }
}
</style>
