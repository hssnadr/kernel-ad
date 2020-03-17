export default {
  setInstitute(state, institute_) {
    state.selInstitute = institute_
  },

  setFormat(state, format_) {
    state.selFormat = format_
  },

  setField(state, field_, state_) {
    if (state_) {
      state.selFields.push(field_)
    } else {
      const ind_ = state.selFields.indexOf(field_)
      state.selFields.splice(ind_, 1)
    }

    // if (!state.selFields.includes(field_)) {
    //   state.selFields.push(field_)
    // } else {
    //   const ind_ = state.selFields.indexOf(field_)
    //   state.selFields.splice(ind_, 1)
    // }
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
