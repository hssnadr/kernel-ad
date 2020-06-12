<template>
  <div class="card">
    <!-- <img :src="thumbnail" :alt="project.id" /> -->
    <img src="https://via.placeholder.com/320x450" />
    <div class="card-content">
      <div @click="emitProject()">
        <h2>{{ project.title }}</h2>
        <h3 v-if="refName(institute) !== ''">{{ refName(institute) }}</h3>
        <span class="format">
          <p>{{ project.format[0] }} project &bull; {{ years }}</p>
        </span>
        <div class="line-break"></div>
        <div class="description">
          <p>
            {{ project.description }}
          </p>
        </div>
      </div>

      <!-- <ul class="icon">
        <input type="button" value="GO" /> -->

      <!-- <nuxt-link class="card-image" :to="{ name: 'projects-' + item.id }">
          <figure>
            <img src="https://placehold.it/1200x840" alt="card image alt" />
          </figure>
        </nuxt-link> -->

      <!-- <a :href="item.link" target="_blank" class="button--grey">Link</a> -->
      <!-- <li>
          <a href="#"><i class="fa fa-search"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-link"></i></a>
        </li> -->
      <!-- </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null,
      required: true
    }
  },
  computed: {
    thumbnail() {
      return this.$store.getters['projects/getThumbnailById'](this.project.id)
    },
    years() {
      let years_ = 'unknown'
      if (this.project.years.y0 !== this.project.years.y1) {
        years_ = this.project.years.y0 + ' - ' + this.project.years.y1
      } else {
        years_ = this.project.years.y0
      }

      return years_
    },
    institute() {
      let institute_ = ''
      if (this.project.institutes !== null) {
        institute_ = this.project.institutes[0]
      }
      return institute_
    }
  },
  methods: {
    emitProject() {
      this.$emit('selected', { id: this.project.id })
    },
    refName(ref_) {
      return this.$store.getters['references/getName'](ref_)
    }
  }
}
</script>

<style lang="scss">
.card {
  position: relative;
  // transition: all 0.4s;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
}

.card .card-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // transition: all 0.5s ease 0s;
  padding: 20px;
  opacity: 0;

  h2 {
    font-size: 1.7em;
    margin-bottom: 0.3rem;
  }

  h3 {
    font-weight: 600;
    font-size: 1.1em;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
    font-style: italic;
    color: transparentize($color: $base-color, $amount: 0.2);
  }

  .description {
    // padding: 0 4px;
    text-align: justify;
    // text-justify: inter-word;
  }

  &:hover {
    background-color: transparentize($color: $primary-color, $amount: 0.2);
    opacity: 1;
    color: $base-color;
  }
}

.line-break {
  width: 30%;
  height: 2px;
  margin: 0.6em 0;
  background: $base-color;
}

/*
.card .card-content:after,
.card .card-content:before {
  content: '';
  width: 100px;
  height: 50px;
  position: absolute;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.6s ease 0.3s;
}
.card .card-content:before {
  border-left: 1px solid #a01f1f;
  border-top: 1px solid #a01f1f;
  top: 19px;
  left: 19px;
}
.card .card-content:after {
  border-bottom: 1px solid #56ec48;
  border-right: 1px solid #56ec48;
  bottom: 19px;
  right: 19px;
}
.card:hover .card-content:after,
.card:hover .card-content:before {
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
} */
/* @media only screen and (max-width: 990px) {
  .card {
    margin-bottom: 30px;
  }
} */
</style>
