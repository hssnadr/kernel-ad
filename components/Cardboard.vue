<template>
  <div id="cardboard" :style="cardBackground">
    <div class="card-content" @click="emitProject()">
      <div class="top-content">
        <h2>{{ dataProject.title }}</h2>
        <h3 v-if="refName(institute) !== ''">{{ refName(institute) }}</h3>
        <span class="format">
          <p>{{ dataProject.format[0] }} project &bull; {{ years }}</p>
        </span>
        <div class="line-break"></div>
        <div class="description">
          <p>
            {{ dataProject.description }}
          </p>
        </div>
      </div>

      <div class="bottom-content">
        <div class="tools-icon">
          <div v-for="tool_ in dataProject.tools" :key="tool_">
            <component
              :is="'icon-' + tool_"
              v-if="isFile('icon-' + tool_)"
              class="tool-icon"
            ></component>
          </div>
        </div>
        <div class="skills">
          <span v-for="skill_ in dataProject.skills" :key="skill_">
            {{ skill_ }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectid: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return {
      cardBackground: {
        backgroundImage: "url('https://via.placeholder.com/320x450')"
      },
      dataProject: null
    }
  },
  computed: {
    thumbnail() {
      return this.$store.getters['projects/getThumbnailById'](
        this.dataProject.id
      )
    },
    years() {
      let years_ = 'unknown'
      if (this.dataProject.years.y0 !== this.dataProject.years.y1) {
        years_ = this.dataProject.years.y0 + ' - ' + this.dataProject.years.y1
      } else {
        years_ = this.dataProject.years.y0
      }

      return years_
    },
    institute() {
      let institute_ = ''
      if (this.dataProject.institutes !== null) {
        institute_ = this.dataProject.institutes[0]
      }
      return institute_
    }
  },
  created() {
    this.dataProject = this.$store.getters['projects/getProjectByid'](
      this.projectid
    )

    this.cardBackground.backgroundImage =
      'url(' +
      this.$store.getters['projects/getThumbnailById'](this.dataProject.id) +
      ')'
  },
  methods: {
    emitProject() {
      this.$emit('selected', { id: this.dataProject.id })
    },
    isFile(file_) {
      return file_ in this.$options.components
    },
    refName(ref_) {
      return this.$store.getters['references/getName'](ref_)
    }
  }
}
</script>

<style lang="scss">
#cardboard {
  width: 140px;
  height: 240px;
  margin: 4px;
  // align-self: center; /* alignement axe secondaire */
  border-radius: 0;
  border: none;

  // @media #{$small-up} {
  //   width: 250px;
  //   height: 408px;
  //   margin: 7px;
  // }
  @media #{$medium-up} {
    width: 300px;
    height: 490px;
    margin: 7px;
  }

  cursor: pointer;
  background-size: cover;
  background-position: center;

  .card-content {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    background-color: transparentize($color: $primary-color, $amount: 0.05);
    color: $base-color;
    opacity: 0;

    .top-content {
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px;

      h2 {
        font-size: 1.7em;
        margin-bottom: 0.3rem;
        // font-style: italic;
        font-weight: 800;

        font-style: normal;
        // color: $primary-color;
        text-transform: uppercase;
      }

      h3 {
        font-weight: 600;
        font-size: 1.1em;
        text-transform: uppercase;
        margin-bottom: 0.3rem;
        color: $lightgrey; // transparentize($color: $base-color, $amount: 0.2);
      }

      .line-break {
        width: 30%;
        height: 2px;
        margin: 1em 0;
        background: $base-color;
      }

      .description {
        text-align: justify;
      }
    }

    .bottom-content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;
      display: flex;
      justify-content: space-between;

      .tools-icon {
        width: 50%;
        display: flex;
        flex-wrap: wrap-reverse;
        align-content: flex-start;
        align-items: center;

        .tool-icon {
          width: 45px;
          fill: $base-color;
          margin-right: 4px;
        }
      }

      .skills {
        // width: 50%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        text-align: right;
        font-weight: 100;
        font-size: 1em;
        color: transparentize($color: $base-color, $amount: 0.2);
      }
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
