import data from '~/static/projects.json'

export const state = () => ({
  allProjects: data,
  curProject: null,
  selYears: null, // { y0: 1989, y1: 2020 },
  // selInstitutes: '',
  // selFormat: '',
  // selFields: [],
  // selSkills: [],
  // selTools: [],
  dispTypeFilter: '',
  selTypeFilters: [],
  selFilters: [
    // { type: 'tools', name: 'Pencils', state: 'include' },
    // { type: 'fields', name: 'Art', state: 'add' },
    // { type: 'skills', name: 'Drawing', state: 'exclude' },
    // { type: 'tools', name: 'illustrator', state: 'include' }
  ]
})

// exports.allProjectsDataBase = allProjectsDataBase

// {
//   title: '',
//   id: '',
//   years: { y0: '', y1: '' },
//   institutes: '',
//   format: '',
//   fields: [],
//   skills: [],
//   tools: [],
//   thumbnail: {
//     asset: '',
//     link: ''
//   },
//   media: {},
//   description: '',
//   level: 1
// }
