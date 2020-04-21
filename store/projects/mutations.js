export default {
  setCurrentProject(state, slug_) {
    // state.curProjectSlug = slug_
    state.curProject = state.allProjects.find((prj_) => prj_.slug === slug_)
    console.log('check2 ', state.curProject.title)
  },

  setInstitute(state, institute_) {
    state.selInstitute = institute_
  },

  setFormat(state, format_) {
    state.selFormat = format_
  },

  setField(state, dataFld_) {
    const field_ = dataFld_.id
    const isFld_ = dataFld_.state
    if (isFld_) {
      if (!state.selFields.includes(field_)) {
        state.selFields.push(field_) // add field if not already selected
      }
    } else if (state.selFields.includes(field_)) {
      const ind_ = state.selFields.indexOf(field_)
      state.selFields.splice(ind_, 1) // remove field if previously selected
    }
  },

  setSkill(state, dataSkl_) {
    const skill_ = dataSkl_.id
    const isSkl_ = dataSkl_.state
    if (isSkl_) {
      if (!state.selSkills.includes(skill_)) {
        state.selSkills.push(skill_) // add skill if not already selected
      }
    } else if (state.selSkills.includes(skill_)) {
      const ind_ = state.selSkills.indexOf(skill_)
      state.selSkills.splice(ind_, 1) // remove skill if previously selected
    }
  }
}
