export const state = () => ({
  allProjects: [
    {
      title: 'Whooshing Machine',
      id: 'whooshing-machine',
      years: { y0: '2014', y1: '2014' },
      institute: 'Strate École de Design',
      format: 'Student Project',
      fields: ['Design'],
      skills: ['ux', 'ui', 'animation', 'video making'],
      tools: ['illustrator', 'aftereffects', 'premiere', 'photoshop'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/06502135604629.Y3JvcCw3NjIsNTk1LDQyLDIy.jpg',
      description: 'Diploma project at Strate École de Design',
      level: 3
    },
    {
      title: 'Austerlitz 1805',
      id: 'austerlitz-1805',
      years: { y0: '2014', y1: '2014' },
      institute: 'Dassault Systèmes',
      format: 'Student Project',
      fields: ['Design'],
      skills: ['Product Design', '3D Modeling', '3D Rendering'],
      tools: ['catia'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/9bd43135402169.Y3JvcCw3NDgsNTg2LDMwLDIw.jpg',
      description:
        'Product design project made for Dassault Systèmes to highlight their 3D solution softwares.',
      level: 2
    },
    {
      title: 'Austerlitz Standard',
      id: 'austerlitz-standard',
      years: { y0: '2014', y1: '2014' },
      institute: 'Dassault Systèmes',
      format: 'Student Project',
      fields: ['Design'],
      skills: ['Product Design', '3D Modeling', '3D Rendering'],
      tools: ['catia'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c6c1c935401905.Y3JvcCw2NzcsNTI5LDAsMg.jpg',
      description:
        'Product design project made for Dassault Systèmes to highlight their 3D solution softwares.',
      level: 2
    },
    {
      title: 'Medapli',
      id: 'medapli',
      years: { y0: '2016', y1: '2016' },
      institute: null,
      format: 'Freelance Project',
      fields: ['Design'],
      skills: ['ux', 'ui'],
      tools: ['illustrator', 'photoshop', 'pixate'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/2e436036472477.Y3JvcCwxMDIwLDc5NywwLDA.jpg',
      description:
        'Medical application dedicated to senior unfamiliar with new technologies.',
      level: 1
    },
    {
      title: 'Portail 3D',
      id: 'portail-3d',
      years: { y0: '2011', y1: '2012' },
      institute: 'Leroy Merlin',
      format: 'Student Project',
      fields: ['Engineering'],
      skills: ['programming', 'ux', 'video making'],
      tools: ['unity', 'C#'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/22a93e11024709.Y3JvcCw0NTAsMzUyLDQxLDIw.png',
      description: 'Online sales aid application',
      level: 2
    },
    {
      title: 'Lumigraph',
      id: 'lumigraph',
      years: { y0: '2013', y1: '2013' },
      institute: 'Strate École de Design',
      format: 'Student Project',
      fields: ['Art'],
      skills: ['programming', 'electronics', 'video making'],
      tools: ['arduino', 'processing'],
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/10904379.5480a3e764ebb.jpg',
      description: 'My first electronics project to make light painting',
      level: 1
    },
    // ------------------------------------------------------------------------------------------------- //
    // ------------------------------------------------------------------------------------------------- //
    {
      title: 'La perception de la réalité',
      id: 'memoire',
      years: { y0: '2013', y1: '2014' },
      institute: 'Strate École de Design',
      format: 'Student Project',
      fields: ['Design'],
      skills: ['DTP'],
      tools: ['indesign', 'photoshop', 'illustrator'],
      thumbnail: {
        asset: null,
        link:
          'https://mir-s3-cdn-cf.behance.net/projects/404/2e611c35613969.Y3JvcCw1MjIsNDA4LDc1LDQ4.jpg'
      },
      description: 'Diploma thesis',
      level: 1
    },
    {
      title: 'W-STM',
      id: 'wstm',
      years: { y0: '2014', y1: '2014' },
      institute: null,
      format: 'Freelance',
      fields: ['Design'],
      skills: ['Product Design'],
      tools: ['catia'],
      thumbnail: {
        asset: null,
        link:
        'https://mir-s3-cdn-cf.behance.net/projects/404/22806283.54baa1e9a7fb5.jpg'
      },
      description:
        'Serves wine and keeps its flavors once the bottle is opened',
      level: 1
    },
    {
      title: 'Cassiopeia',
      id: 'cassiopeia',
      years: { y0: '2014', y1: '2014' },
      institute: 'Dassault Systèmes',
      format: 'Student Project',
      fields: ['Design'],
      skills: ['UX', 'Video'],
      tools: ['premiere', 'aftereffects', 'catia'],
      thumbnail: {
        asset: null,
        link:
          'https://mir-s3-cdn-cf.behance.net/projects/404/9f070035652361.Y3JvcCw3NzEsNjAyLDM2LDI2.jpg'
      },
      media: {
        iframe: [
          '<iframe src="https://player.vimeo.com/video/161060346" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
        ]
      },
      description:
        'Video and interaction concept for Cassiopeia camera project.',
      level: 1
    },
    {
      title: 'GUKEN',
      id: 'guken',
      years: { y0: '2015', y1: '2016' },
      institute: null,
      format: 'Personal',
      fields: ['Engineering', 'Design'],
      skills: ['Data science', 'Programing', 'Management', 'DTP'],
      tools: ['matlab', 'python', 'photoshop', 'illustrator'],
      thumbnail: {
        asset: null,
        link:
          'https://mir-s3-cdn-cf.behance.net/projects/404/72084b35618985.Y3JvcCw4MDcsNjMxLDQsNg.jpg'
      },
      media: {},
      description: 'Startup created from my diploma project.',
      level: 1
    },
    {
      title: 'Vectors',
      id: 'vectors-art',
      years: { y0: '2013', y1: '2015' },
      institute: null,
      format: 'Personal',
      fields: ['Art'],
      skills: ['Drawing', 'Illustration'],
      tools: ['illustrator'],
      thumbnail: {
        asset: null,
        link:
          'https://mir-s3-cdn-cf.behance.net/projects/404/11524399.54ba8e45bf59b.jpg'
      },
      media: {},
      description: 'Illustrations',
      level: 1
    },
    {
      title: 'Frost',
      id: 'frost-project',
      years: { y0: '2014', y1: '2014' },
      institute: 'Dassault Systèmes',
      format: 'Student',
      fields: ['Design'],
      skills: ['Product Design', '3D Modeling', '3D Rendering'],
      tools: ['catia'],
      thumbnail: {
        asset: null,
        link:
          'https://mir-s3-cdn-cf.behance.net/projects/404/19378135.548f55222ab20.jpg'
      },
      media: {
        images: [
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d00dd219378135.562d962c93011.jpg',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3791c219378135.562d962c975cb.jpg',
          'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/285d6f19378135.562d962c7ebb0.png',
          'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5f52df19378135.562d962c85876.png'
        ]
      },
      description:
        'Short familiarization project with Dassault Systemes softwares',
      level: 1
    }
  ],
  curProject: null,
  selYears: null, // { y0: 1989, y1: 2020 },
  selInstitute: '',
  selFormat: '',
  selFields: [],
  selSkills: [],
  selTools: []
})

// exports.allProjectsDataBase = allProjectsDataBase

// {
//   title: '',
//   id: '',
//   years: { y0: '', y1: '' },
//   institute: '',
//   format: '',
//   fields: [],
//   skills: [],
//   tools: [],
//   thumbnail: '',
//   media: {},
//   description: '',
//   level: 1
// }
