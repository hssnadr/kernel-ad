<template>
  <div class="docstep-gui">
    <ul id="parts">
      <li v-for="part in dataSteps.parts" :key="part">
        <!-- PART -->
        {{ part.name }}

        <!-- STEPS -->
        <ul id="steps">
          <li v-for="step in dataSteps.steps" :key="step">
            <span v-if="step.partId === part.id">
              {{ step.name }}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    docId: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return {
      dataSteps: null
    }
  },
  created() {
    this.dataSteps = this.$store.getters['docsteps/getDocData'](this.docId)
  }
}
</script>
