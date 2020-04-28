<template>
  <div>
    <h4 class="filter-section">{{ type }}</h4>
    <li
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
    </li>
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
    getStateByFilter(id_) {
      const state_ = (id_) => {
        // get current state of filter = { type: this.type, name: id_ }
        return this.$store.getters['projects/getFilterState']({
          type: this.type,
          name: id_
        })
      }
      console.log('styleByFilterId ', id_, state_)

      return state_
    }
  },
  methods: {
    setFilter(filter_) {
      const oldState = this.getStateByFilter(filter_)
      let newState_ = 'skip' // default value

      // if (oldState != null) {
      //   switch (oldState) {
      //     case 'skip':
      //       newState_ = 'include'
      //       break
      //     case 'include':
      //       newState_ = 'skip'
      //       break
      //     default:
      //       break
      //   }
      // }

      if (oldState == null) {
        newState_ = 'include'
      }

      console.log(newState_)

      const data_ = { type: this.type, name: filter_, state: newState_ }
      this.$store.commit('projects/setFilter', data_)
      console.log('setFilter ', filter_)
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
