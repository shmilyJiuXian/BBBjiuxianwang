angular.module("projectDemo.buy",[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state({
		name:'buycar',
		url:'/buycar',
		css:'pages/buycar/buycar.css',
		templateUrl:'pages/buycar/buycar.html'
	})
})

