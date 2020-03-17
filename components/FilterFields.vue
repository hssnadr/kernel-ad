<template>
  <div>
    {{ testMessage2 }}
    <button-filter :id="'All fields'"></button-filter>
    <button-filter
      v-for="(fld_, index) in allFields"
      :id="fld_"
      :key="index"
      @selected="setField"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      testMessage2: 'nothing'
    }
  },
  computed: mapGetters({
    allFields: 'projects/allFields'
  }),
  watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  methods: {
    setField(data_) {
      this.testMessage2 = data_.id + data_.state
      this.$store.commit('projects/setField', data_)
    }
  }
}
</script>
