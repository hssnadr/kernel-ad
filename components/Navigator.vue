<template>
  <!-- Nav menu is displayed in default layout on medium-up screen but is displayed in side menu (Menu_Container.vue) for smarphones -->
  <div id="navigator">
    <div :class="[{ 'color-swap': colorSwap }, 'color-unswap']">
      <nav :class="[{ 'nav-col': isSideMenuHover }, 'nav-row']">
        <NuxtLink to="/">
          Portfolio
        </NuxtLink>

        <NuxtLink to="/MotionLab">
          MotionLab
        </NuxtLink>

        <NuxtLink to="/Hitbox">
          Hitbox
        </NuxtLink>

        <NuxtLink to="/About">
          About
        </NuxtLink>

        <!-- <h1>
        <NuxtLink to="/KernelError">
          Kernel Error
        </NuxtLink>
      </h1> -->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    colorSwap() {
      return this.$store.getters['navigator/colorSwap'] && !this.isSideMenuHover
    },
    isSideMenu() {
      return this.$store.getters['utilities/isSideMenu']
    },
    isSideMenuHover() {
      return this.$store.getters['utilities/isSideMenuHover']
    }
  }
}
</script>

<style lang="scss">
#navigator {
  padding: 1rem 1.5rem;
  font-size: 1.1rem;

  .nav-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .nav-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      font-size: 2rem;
      font-weight: 800;
      text-transform: uppercase;
      &:hover {
        font-weight: 800;
      }
    }
  }

  a {
    margin: 0.4rem;
    font-weight: 400;
    &:hover {
      // font-weight: 400;
    }
  }

  .color-unswap {
    a {
      color: $primary-color;
      &:before {
        background-color: $primary-color;
      }
      &:hover {
        color: $primary-color;
      }
    }
  }

  .color-swap {
    a {
      color: $base-color;
      &:before {
        background-color: $base-color;
      }
      &:hover {
        color: $base-color;
      }
    }
  }
}
</style>
