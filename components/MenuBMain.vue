<template>
  <div>
    Les gens c'est le main menu
    <h3>FILTERS</h3>
    <!-- <field-filter />
    <skill-filter /> -->
    <base-filter :type="'fields'" />
    <base-filter :type="'skills'" />
    <base-filter :type="'tools'" />
    <base-filter :type="'institute'" />
    <base-filter :type="'monformat'" />
    <years-filter />
  </div>
</template>

<script>
import BaseFilter from '~/components/ProjectFilters/BaseFilter.vue'
// import FieldFilter from '~/components/ProjectFilters/FilterFields.vue'
// import SkillFilter from '~/components/ProjectFilters/FilterSkills.vue'
import YearsFilter from '~/components/ProjectFilters/FilterYears.vue'

export default {
  components: {
    BaseFilter,
    // FieldFilter,
    // SkillFilter,
    YearsFilter
  }
}
</script>
