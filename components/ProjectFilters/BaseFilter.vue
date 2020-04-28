<template>
  <div>
    <h4
      class="filter-section"
      :class="{ include: isTypeFilter, skip: !isTypeFilter }"
      @click="setFilterType()"
    >
      {{ type }}
    </h4>
    <div v-if="isTypeFilter">
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
    setFilterType() {
      this.$store.commit('projects/setTypeFilter', this.type)
    },
    setFilter(filter_) {
      const oldState = this.getStateByFilter(filter_)
      let newState_ = 'skip' // default value

      if (oldState == null) {
        newState_ = 'include'
      }

      const data_ = { type: this.type, name: filter_, state: newState_ }
      this.$store.commit('projects/setFilter', data_)
    }
  }
}
</script>

<style>
.filter-section {
  text-transform: capitalize;
}

.filter-name:hover {
  font-size: 1.1em;
}

.include {
  font-weight: bold;
}
</style>
