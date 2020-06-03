<template>
  <div>
    <button
      :class="[isTypeFilter ? 'typefilter-on' : 'typefilter-off']"
      @click="showFilterType()"
    >
      {{ type }}
    </button>
    <div v-if="showFilter">
      <div
        v-for="filter in filters"
        :id="filter"
        :key="filter"
        class="filter-name"
        :class="{
          include: 'include' === getStateByFilter(filter),
          skip: 'skip' === getStateByFilter(filter)
        }"
        @click="setFilter(filter)"
      >
        <!-- :style="styleByFilterId(filter)" -->
        {{ filter }}
        <!-- {{ styleByFilterId(filter) }} -->
      </div>
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
  data() {
    return {
      showFilter: false,
      skip: {
        fontWeight: 'normal'
      },
      include: {
        fontWeight: 'bold'
      }
    }
  },
  computed: {
    filters() {
      return this.$store.getters['projects/getAllFiltersByType'](this.type)
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
      if (!this.showFilter && this.isTypeFilter) {
        this.showFilter = false
      } else {
        this.showFilter = !this.showFilter
      }
      this.$store.commit('projects/toggleTypeFilter', this.type)
    },
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
.typefilter-off {
  font-weight: 800;
  font-style: italic;
  font-size: 2.5em;
  letter-spacing: 0.02em;
  transition: letter-spacing 0.15s ease-out;
  text-transform: uppercase;
  padding-left: 0;
  margin-left: 0.2em;

  color: $base-color;
  @include text-stroke($color: $primary-color, $thikness: 1px);

  &:hover {
    letter-spacing: 0.05em;
  }
}

.typefilter-on {
  @extend .typefilter-off;
  // @include text-nostroke();
  color: $primary-color;

  &:hover {
    // @include text-nostroke();
  }
}

.filter-name:hover {
  // font-size: 1.1em;
}

.include {
  font-weight: bold;
}
</style>
