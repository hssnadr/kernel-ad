<template>
  <div>
    <!-- <header id="hitbox-header"></header> -->
    <div class="hitbox-background1"></div>
    <!-- style="background-attachment: scroll;" -->

    <!-- VIDEO -->
    <div class="iframe-container">
      <iframe
        src="https://player.vimeo.com/video/450028533?autoplay=1&title=0&byline=0&portrait=0"
        class="responsive-iframe"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>

    <div class="hitbox-background2"></div>
    <div class="hitbox-background3"></div>
    <div class="hitbox-background4"></div>
    <div class="hitbox-background5"></div>

    <!-- <div
      v-for="index in 5"
      :key="index"
      :class="'hitbox-background' + index"
    ></div> -->
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
