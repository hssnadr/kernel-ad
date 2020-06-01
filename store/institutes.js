export const state = () => ({
  allInstitutes: [
    {
      name: 'Strate École de Design',
      id: 'strate',
      link: 'www.strate.design'
    },
    {
      name: 'Dassault Systèmes',
      id: 'dassault-systemes',
      link: 'www.3ds.com'
    },
    {
      name: 'CRI Paris',
      id: 'cri-paris',
      link: 'www.cri-paris.org'
    },
    {
      name: 'Arts et Métiers ParisTech',
      id: 'am-paristech',
      link: 'www.artsetmetiers.fr'
    },
    {
      name: 'Leroy Merlin',
      id: 'leroy-merlin',
      link: 'www.leroymerlin.fr'
    }
  ]
})

// Getters
export const getters = {
  getInstitute: (state) => (id_) => {
    state.allInstitutes.find((inst) => inst.id === id_)
  }
}
