<template>
  <div>
    <!-- Header information -->
    <h2>{{ project.title }}</h2>
    <h3>{{ project.year }}</h3>
    <p>{{ project.description }}</p>
    <p>{{ project.skills }}</p>
    <!-- {{ project.media.images.length }} -->

    <!-- Dedicated project page (referenced as component) -->
    <div v-if="isExtComponent">
      <component :is="id"></component>
    </div>
    <div v-else>
      <!-- Gallery from projects/store -->
      <div v-if="isGallery">
        <img
          v-for="(img_, index) in project.media.images"
          :key="index"
          :src="img_"
          class="pic"
        />
      </div>
      <!-- iFrame from projects/store -->
      <div v-if="isIframe">
        <div v-for="(ifr_, index) in project.media.iframes" :key="index">
          <p><span v-html="ifr_"></span></p>
        </div>
      </div>
      <!-- Footer (related project) -->
    </div>
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
    },
    isGallery() {
      let is_ = false
      if (Object.prototype.hasOwnProperty.call(this.project, 'media')) {
        if (
          Object.prototype.hasOwnProperty.call(this.project.media, 'images')
        ) {
          if (this.project.media.images != null) {
            is_ = this.project.media.images.length > 0
          }
        }
      }
      return is_
    },
    isIframe() {
      let is_ = false
      if (Object.prototype.hasOwnProperty.call(this.project, 'media')) {
        if (
          Object.prototype.hasOwnProperty.call(this.project.media, 'iframes')
        ) {
          if (this.project.media.iframes != null) {
            is_ = this.project.media.iframes.length > 0
          }
        }
      }
      return is_
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

<style>
.pic {
  width: 100%;
}
</style>
