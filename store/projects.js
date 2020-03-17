export const state = () => ({
  allProjects: [
    {
      title: 'Whooshing Machine',
      slug: 'whooshing-machine',
      year: '2014',
      institute: 'Strate École de Design',
      format: 'Student Project',
      fields: ['Design'],
      skills: ['ux', 'ui', 'animation', 'video making'],
      tools: [
        'Adobe Illustrator',
        'Adobe After Effects',
        'Adobe Premiere',
        'Adobe Photoshop'
      ],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/06502135604629.Y3JvcCw3NjIsNTk1LDQyLDIy.jpg',
      description: 'Diploma project at Strate École de Design',
      level: 3
    },
    {
      title: 'Austerlitz 1805',
      slug: 'austerlitz-1805',
      year: '2015',
      institute: 'Dassault Systèmes',
      format: 'Student Project',
      fields: ['Design'],
      skills: ['product design', '3d modeling', '3d rendering'],
      tools: ['CATIA'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/9bd43135402169.Y3JvcCw3NDgsNTg2LDMwLDIw.jpg',
      description:
        'Product design project made for Dassault Systèmes to highlight their 3D solution softwares.',
      level: 2
    },
    {
      title: 'Austerlitz Standard',
      slug: 'austerlitz-standard',
      year: '2015',
      institute: 'Dassault Systèmes',
      format: 'Student Project',
      fields: ['Design'],
      skills: ['product design', '3d modeling', '3d rendering'],
      tools: ['CATIA'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c6c1c935401905.Y3JvcCw2NzcsNTI5LDAsMg.jpg',
      description:
        'Product design project made for Dassault Systèmes to highlight their 3D solution softwares.',
      level: 2
    },
    {
      title: 'Medapli',
      slug: 'medapli',
      year: '2016',
      institute: '-',
      format: 'Freelance Project',
      fields: ['Design'],
      skills: ['ux', 'ui'],
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Pixate Studio'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/2e436036472477.Y3JvcCwxMDIwLDc5NywwLDA.jpg',
      description:
        'Medical application dedicated to senior unfamiliar with new technologies.',
      level: 1
    },
    {
      title: 'Portail 3D',
      slug: 'portail-3d',
      year: '2012',
      institute: 'Leroy Merlin',
      format: 'Student Project',
      fields: ['Engineering'],
      skills: ['programming', 'ux', 'video making'],
      tools: ['Unity 3D', 'C#'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/22a93e11024709.Y3JvcCw0NTAsMzUyLDQxLDIw.png',
      description: 'Online sales aid application',
      level: 2
    },
    {
      title: 'Lumigraph',
      slug: 'lumigraph',
      year: '2013',
      institute: 'Strate École de Design',
      format: 'Student Project',
      fields: ['Art'],
      skills: ['programming', 'electronics', 'video making'],
      tools: ['Arduino', 'Processing'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/10904379.5480a3e764ebb.jpg',
      description: 'My first electronics project to make light painting',
      level: 1
    }
  ],
  selInstitute: '',
  selFormat: '',
  selFields: [],
  selSkills: [],
  selTools: []
})

// exports.allProjectsDataBase = allProjectsDataBase

// {
//     title: '',
//     slug: '',
//     year: '',
//     institute: '',
//     format: '',
//     fields: [''],
//     skills: [''],
//     tools: [''],
//     thumbnail: '',
//     description: ''
// }
