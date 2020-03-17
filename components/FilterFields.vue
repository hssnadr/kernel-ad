<template>
  <div>
    <button-filter v-for="(fld_, index) in allFields" :id="fld_" :key="index" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isCheck: true
    }
  },
  computed: mapGetters({
    allFields: 'projects/allFields'
  }),
  methods: {
    setField(fld_, state_) {
      this.$store.commit('projects/setField', fld_, state_)
    }
  }
}
</script>
