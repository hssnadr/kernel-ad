<template>
  <div>
    <button
      :class="[isTypeFilter ? 'typefilter-on' : 'typefilter-off']"
      @click="showFilterType()"
    >
      {{ type }}
    </button>

    <div v-if="isFilterDisplay" class="filters">
      <button
        v-for="filter in filters"
        :id="filter"
        :key="filter"
        :class="[getStateByFilter(filter) ? 'filtertext-on' : 'filtertext-off']"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'skip',
      required: true
    }
  },
  computed: {
    filters() {
      return this.$store.getters['projects/getAllFiltersByType'](this.type)
    },
    isFilterDisplay() {
      return this.$store.getters['projects/isFilterDisplay'](this.type)
    },
    isTypeFilter() {
      return this.$store.getters['projects/isTypeFilter'](this.type)
    },
    getStateByFilter(id_) {
      const state_ = (id_) => {
        // get current state of filter = { type: this.type, name: id_ }
        return this.$store.getters['projects/getFilterState']({
          type: this.type,
          name: id_
        })
      }

      return state_
    }
  },
  methods: {
    showFilterType() {
      if (this.isFilterDisplay) {
        this.$store.commit('projects/setDisplayFilter', 'nodisplay') // send any messages other than type filters
      } else if (!this.isTypeFilter) {
        this.$store.commit('projects/setDisplayFilter', this.type)
        this.$store.commit('projects/toggleTypeFilter', this.type)
      } else {
        this.$store.commit('projects/toggleTypeFilter', this.type)
      }
    },
    // showFilterType() {
    //   if (!this.isFilterDisplay && this.isTypeFilter) {
    //     // this.isFilterDisplay = false
    //     // this.$store.commit('projects/setDisplayFilter', 'nodisplay')
    //   } else {
    //     // this.isFilterDisplay = !this.isFilterDisplay

    //     this.$store.commit('projects/setDisplayFilter', this.type)
    //   }
    //   this.$store.commit('projects/toggleTypeFilter', this.type)
    // },
    setFilter(filter_) {
      const oldState = this.getStateByFilter(filter_)
      let newState_ = 'skip' // default value

      if (oldState == null) {
        newState_ = 'include'
      }

      const data_ = { type: this.type, name: filter_, state: newState_ }
      this.$store.commit('projects/setFilter', data_)

      if (!this.isTypeFilter) {
        this.$store.commit('projects/toggleTypeFilter', this.type) // switch state
      }
    }
  }
}
</script>

<style lang="scss">
$filter-offset: 5px;
$filter-spaceletter: 0.02em;

.typefilter-off {
  font-weight: 800;
  font-style: italic;
  font-size: 2.5em;
  letter-spacing: $filter-spaceletter;
  text-transform: uppercase;
  padding-left: 0;
  margin-left: 0.2em;

  color: $base-color;
  @include text-stroke($color: $primary-color, $thikness: 1px);

  transition: transform 0.3s ease-out, letter-spacing 0.15s ease-out;

  &:hover {
    letter-spacing: 3 * $filter-spaceletter;
    transform: translateX($filter-offset);
  }
}

.typefilter-on {
  @extend .typefilter-off;
  color: $primary-color;
  transform: translateX($filter-offset);
  letter-spacing: 3 * $filter-spaceletter;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.filtertext-off {
  font-weight: 300;
  font-size: 1rem;
  margin: 0.5em 0.2em;
  padding: 0;
  text-transform: lowercase;
  color: $lightgrey;
  transition: all 0s;
}

.filtertext-on {
  @extend .filtertext-off;
  font-weight: 400;
  color: $primary-color;
}
</style>
