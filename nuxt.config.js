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
  ],
  head:{
  	meta:[
		{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
  	]
  }

}
