<template>
  <div
    :class="[isOpen ? 'hamburger' : 'hamburger-cross']"
    @click="toggleState()"
  >
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleState() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
.hamburger {
  position: relative;
  width: 54px;
  height: 54px;

  background: black;
  border-radius: 50%;
}

.hamburger {
  position: relative;
  width: 54px;
  height: 54px;
  background: black;
  border-radius: 50%;
  transform: rotate(0);
  transition: 0.5s ease-out;

  // variables
  $width-bar: 20px;
  $height-bar: 2px;
  $space-between: 0.4em; //6px;
  $offset: 0.1em; //1px;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    display: block;
    background: white;
    width: $width-bar;
    height: $height-bar;

    // transition: 0.3s ease-out;
    &::before,
    &::after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;

      display: block;
      background: white;
      width: $width-bar;
      height: $height-bar;

      transform: translateY(-$space-between);
      transition: 0.3s;
    }

    &:after {
      transform: translateY($space-between);
    }
  }

  &:hover {
    span {
      &:before {
        transform: translateY(-($space-between + $offset));
      }

      &:after {
        transform: translateY($space-between + $offset);
      }
    }
  }
}

.hamburger-cross {
  @extend.hamburger;
  transform: rotate(180deg);

  span {
    background: transparent;

    &::before {
      transform: translateY(0) rotate(45deg);
    }

    &::after {
      transform: translateY(0) rotate(-45deg);
    }
  }
  &:hover {
    span {
      &:before {
        transform: translateY(0) rotate(135deg);
      }

      &:after {
        transform: translateY(0) rotate(45deg);
      }
    }
  }
}
</style>
