<template>
  <div>
    C'est le main menu B)
    <h3>FILTERS</h3>
    <field-filter />
    <skill-filter />
    <years-filter />
  </div>
</template>

<script>
import FieldFilter from '~/components/ProjectFilters/FilterFields.vue'
import SkillFilter from '~/components/ProjectFilters/FilterSkills.vue'
import YearsFilter from '~/components/ProjectFilters/FilterYears.vue'

export default {
  components: {
    FieldFilter,
    SkillFilter,
    YearsFilter
  }
}
</script>
