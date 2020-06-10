<template>
  <div class="pseudo-iframe">
    <div class="page-project">
      test
    </div>
  </div>
</template>

<style lang="scss">
.pseudo-iframe {
  width: 100vw;
  height: 100vh;
  background: transparentize($color: $primary-color, $amount: 0.15);
}

.page-project {
  display: block;
  width: 80%;
  height: 100%;
  margin: auto;
  background: white;
}
</style>
