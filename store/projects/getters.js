export default {
  getProjectByid: (state) => (id_) => {
    return state.allProjects.find((prj_) => prj_.id === id_)
  },

  getThumbnailById: (state) => (id_) => {
    const prj_ = state.allProjects.find((prj_) => prj_.id === id_)
    let thb_ = 'http://via.placeholder.com/500c'

    if (prj_.thumbnail.asset != null) {
      try {
        const f_ = 'projects/' + prj_.id + '/' + prj_.thumbnail.asset
        thb_ = require('../../assets/' + f_)
      } catch (err) {
        console.error(err)
      }
    } else if (prj_.thumbnail.link != null) {
      thb_ = prj_.thumbnail.link
    }

    return thb_
  },

  getYears(state) {
    const allPrj_ = state.allProjects
    const d_ = new Date()
    let y0_ = d_.getFullYear()
    let y1_ = 1989

    allPrj_.forEach((p_) => {
      if (!isNaN(p_.years.y0)) {
        if (p_.years.y0 < y0_) {
          y0_ = p_.years.y0
        }
      }

      if (!isNaN(p_.years.y1)) {
        if (p_.years.y1 > y1_) {
          y1_ = p_.years.y1
        }
      }
    })

    return { y0: y0_, y1: y1_ }
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

    // YEARS
    let fltYrs_ = []
    if (state.selYears != null) {
      const y0_ = state.selYears.y0
      const y1_ = state.selYears.y1
      allPrj_.forEach((prj_) => {
        if (!(prj_.years.y1 < y0_ || prj_.years.y0 > y1_)) {
          fltYrs_.push(prj_) // add project
        }
      })
    } else {
      fltYrs_ = allPrj_ // all projects if no selection
    }

    // FIELDS
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

    // SKILLS
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
          if (fltYrs_.includes(project_)) {
            filtPrj_.push(project_)
          }
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
