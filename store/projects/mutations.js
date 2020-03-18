export default {
  setInstitute(state, institute_) {
    state.selInstitute = institute_
  },

  setFormat(state, format_) {
    state.selFormat = format_
  },

  setField(state, dataFld_) {
    const field_ = dataFld_.id
    const isFld_ = dataFld_.state
    if (isFld_ && !state.selFields.includes(field_)) {
      state.selFields.push(field_) // add field if not already selected
    } else if (state.selFields.includes(field_)) {
      const ind_ = state.selFields.indexOf(field_)
      state.selFields.splice(ind_, 1) // remove field if previously selected
    }
  },

  setSkill(state, skill_) {
    if (!state.selSkills.includes(skill_)) {
      state.selSkills.push(skill_)
    } else {
      const ind_ = state.selSkills.indexOf(skill_)
      state.selSkills.splice(ind_, 1)
    }
  }
}
