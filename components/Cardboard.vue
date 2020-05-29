<template lang="html">
  <div class="card">
    <img :src="thumbnail" :alt="project.id" />
    <div class="box-content">
      <ul class="icon">
        <input type="button" value="GO" @click="emitProject" />
        <!-- <nuxt-link class="card-image" :to="{ name: 'projects-' + item.id }">
          <figure>
            <img src="https://placehold.it/1200x840" alt="card image alt" />
          </figure> -->
        <!-- </nuxt-link> -->

        <!-- <a :href="item.link" target="_blank" class="button--grey">Link</a> -->
        <!-- <li>
          <a href="#"><i class="fa fa-search"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-link"></i></a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    project: Object
  },
  computed: {
    thumbnail() {
      return this.$store.getters['projects/getThumbnailById'](this.project.id)
    }
  },
  methods: {
    emitProject() {
      this.$emit('selected', { id: this.project.id })
    },
    setClass() {
      // return 'col-xl-4 col-md-6 col-sm-12'
      if (this.project.level === 1) {
        return 'col-xl-4 col-md-4 col-sm-12'
      } else if (this.project.level === 2) {
        return 'col-xl-4 col-md-6 col-sm-12'
      } else if (this.project.level === 3) {
        return 'col-xl-4 col-md-8 col-sm-12'
      }
    }
  }
}
</script>

<style>
.card {
  position: relative;
  /* float: left; */
  transition: all 0.4s;
}

.card img {
  /* object-fit: cover; */
  width: 100%;
  height: auto;
}
.card .box-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease 0s;
}
.card:hover .box-content {
  background-color: rgba(255, 242, 242, 0.5);
}
.card .box-content:after,
.card .box-content:before {
  content: '';
  width: 100px;
  height: 50px;
  position: absolute;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.6s ease 0.3s;
}
.card .box-content:before {
  border-left: 1px solid #a01f1f;
  border-top: 1px solid #a01f1f;
  top: 19px;
  left: 19px;
}
.card .box-content:after {
  border-bottom: 1px solid #56ec48;
  border-right: 1px solid #56ec48;
  bottom: 19px;
  right: 19px;
}
.card:hover .box-content:after,
.card:hover .box-content:before {
  opacity: 1;
  transform: scale(1);
}
.card .title {
  font-size: 22px;
  color: #000;
  margin: 0;
  position: relative;
  top: 0;
  opacity: 0;
  transition: all 1s ease 10ms;
}
.card:hover .title {
  top: 39%;
  opacity: 1;
  transition: all 0.5s cubic-bezier(1, -0.53, 0.405, 1.425) 10ms;
}
.card .title:after {
  content: '';
  width: 0;
  height: 1px;
  background: #040404;
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: all 1s ease 0s;
}
.card:hover .title:after {
  width: 80%;
  transition: all 1s ease 0.8s;
}
.card .icon {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(1, -0.53, 0.405, 1.425);
  transition-delay: 0.1s;
}
.card:hover .icon {
  bottom: 39%;
  opacity: 1;
}
.card .icon li {
  display: inline-block;
}
.card .icon li a {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  font-size: 18px;
  color: #000;
  border: 1px solid #000;
  margin-right: 5px;
  transition: all 0.3s ease-in-out 0s;
}
.card .icon li a:hover {
  background: #000;
  color: #fff;
}
/* @media only screen and (max-width: 990px) {
  .card {
    margin-bottom: 30px;
  }
} */
</style>
