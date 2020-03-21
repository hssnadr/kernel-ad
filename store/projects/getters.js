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

  fltrdProjectsField(state) {
    const allPrj_ = state.allProjects
    const selFld_ = state.selFields
    const filtPrj_ = []

    for (let i = 0; i < allPrj_.length; i++) {
      if (selFld_.length > 0) {
        for (let j = 0; j < selFld_.length; j++) {
          if (allPrj_[i].fields.includes(selFld_[j])) {
            filtPrj_.push(allPrj_[i]) // add project
          }
        }
      }
    }

    return filtPrj_
  },

  filteredProjects(state) {
    const allPrj_ = state.allProjects

    // console.log(selFld_)
    // console.log(selSkl_)

    const selFld_ = state.selFields
    let fltFldPrj_ = []
    if (selFld_.length > 0) {
      allPrj_.forEach((prj_) => {
        selFld_.forEach((fld_) => {
          if (prj_.fields.includes(fld_)) {
            fltFldPrj_.push(prj_) // add project
          }
        })
      })
    } else {
      fltFldPrj_ = allPrj_ // all projects if no selection
    }

    let fltSklPrj_ = []
    const selSkl_ = state.selSkills
    if (selSkl_.length > 0) {
      allPrj_.forEach((prj_) => {
        selSkl_.forEach((skl_) => {
          if (prj_.skills.includes(skl_)) {
            fltSklPrj_.push(prj_) // add project
          }
        })
      })
    } else {
      fltSklPrj_ = allPrj_ // all projects if no selection
    }

    const filtPrj_ = []
    allPrj_.forEach((project_) => {
      if (fltFldPrj_.includes(project_)) {
        if (fltSklPrj_.includes(project_)) {
          filtPrj_.push(project_)
        }
      }
    })

    // If no project selected return all projects
    // if (filtPrj_.length === 0) {
    //   filtPrj_ = allPrj_
    // }

    return filtPrj_
  }
}
