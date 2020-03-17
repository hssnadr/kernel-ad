export default {
  todos(state) {
    return state.list
  },

  allFormats(state) {
    const allPrj_ = state.allProjects
    const allFrmt_ = []

    for (let i = 0; i < allPrj_.length; i++) {
      if (allPrj_[i].fields.length > 0) {
        for (let j = 0; j < allPrj_[i].fields.length; j++) {
          const frmt_ = allPrj_[i].fields[j]
          if (!allFrmt_.includes(frmt_)) {
            allFrmt_.push(frmt_)
          }
        }
      }
    }
    return allFrmt_
  },

  allFields(state) {
    const allPrj_ = state.allProjects
    const allFld_ = []

    for (let i = 0; i < allPrj_.length; i++) {
      if (allPrj_[i].fields.length > 0) {
        for (let j = 0; j < allPrj_[i].fields.length; j++) {
          const fld_ = allPrj_[i].fields[j]
          if (!allFld_.includes(fld_)) {
            allFld_.push(fld_)
          }
        }
      }
    }
    return allFld_
  },

  allSkills(state) {
    const allPrj_ = state.allProjects
    const allSkl_ = []

    for (let i = 0; i < allPrj_.length; i++) {
      if (allPrj_[i].skills.length > 0) {
        for (let j = 0; j < allPrj_[i].skills.length; j++) {
          const skl_ = allPrj_[i].skills[j]
          if (!allSkl_.includes(skl_)) {
            allSkl_.push(skl_)
          }
        }
      }
    }
    return allSkl_
  },

  filteredProjects(state) {
    const allPrj_ = state.allProjects
    const selFld_ = state.selFields
    const selSkl_ = state.selSkills
    let filtPrj_ = []

    // console.log(selFld_)
    // console.log(selSkl_)

    // FIELDS
    for (let i = 0; i < allPrj_.length; i++) {
      if (selFld_.length > 0) {
        for (let j = 0; j < selFld_.length; j++) {
          if (
            !filtPrj_.includes(allPrj_[i]) &&
            allPrj_[i].fields.includes(selFld_[j])
          ) {
            filtPrj_.push(allPrj_[i]) // add project
          }
        }
      } else {
        filtPrj_ = allPrj_
      }
    }

    // SKILLS
    for (let i = 0; i < filtPrj_.length; i++) {
      if (selSkl_.length > 0) {
        for (let j = 0; j < selSkl_.length; j++) {
          if (
            filtPrj_.includes(filtPrj_[i]) &&
            !filtPrj_[i].skills.includes(selSkl_[j])
          ) {
            filtPrj_.splice(i, 1) // remove project
          }
        }
      }
    }

    // // SKILLS
    // for (let i = 0; i < allPrj_.length; i++) {
    //   if (selSkl_.length > 0) {
    //     for (let k = 0; k < selSkl_.length; k++) {
    //       if (
    //         !filtPrj_.includes(allPrj_[i]) &&
    //         allPrj_[i].skills.includes(selSkl_[k])
    //       ) {
    //         filtPrj_.push(allPrj_[i]) // add project
    //       }
    //     }
    //   }
    // }

    // // Filter institute
    // filtPrj_ = filtPrj_.filter(
    //   (proj_) => proj_.institute === state.selInstitute
    // )
    // // Filter format
    // filtPrj_ = filtPrj_.filter((proj_) => proj_.format === state.selFormat)

    // If no project selected return all projects
    if (filtPrj_.length === 0) {
      filtPrj_ = allPrj_
    }

    return filtPrj_
  }
}
