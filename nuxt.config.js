// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/mobilesystems/'
//   }
// } : {}

// module.exports = {
//   ...routerBase
// }

module.exports = {
  router: {
    base: '/mobilesystems/'
  },
  generate:{
  	dir: 'docs'
  }
}

