const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/mobilesystems/'
  },
    generate:{
  		dir: 'docs'
  	}
} : {
 		 generate:{
  			dir: 'docs'
		 }
	}

module.exports = {
  ...routerBase,
  modules: [
	'bootstrap-vue/nuxt'
  ]

}
