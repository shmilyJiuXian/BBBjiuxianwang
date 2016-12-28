angular.module('projectDemo',['ui.router','angularCSS',
'projectDemo.homePage',
"projectDemo.buy",
"home.hotSell",
"dataModule"
])
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home')
})
.controller('swiper',function($scope){
     $scope.data1=[
			"http://img06.jiuxian.com/bill/2016/1226/cf2dd848cc3a40c1ae3927980033cfe0.jpg"
			,"http://img09.jiuxian.com/bill/2016/1221/893e8bdd03f14af498e5deebef36bd6c.jpg"
			,"http://img06.jiuxian.com/bill/2016/1216/58d46f28ece041a29c2d9716d2a2d813.jpg"
			,"http://img09.jiuxian.com/bill/2016/1223/adc5dc8d03e7418d85e3ea202d9225f9.jpg"
			,"http://img06.jiuxian.com/bill/2016/1226/00924467305e42d98b2dd6312c02c766.jpg"
			,"http://img08.jiuxian.com/bill/2016/1223/7b744f47f0e04f4f8f27d02f245c6be0.jpg"
			,"http://img08.jiuxian.com/bill/2016/1216/789fd09434a34528beb3a89e84c7ae10.jpg"
			]

})
.controller('swiper1',function($scope){
     $scope.data1=[
				"http://img10.jiuxian.com/bill/2016/1228/e16aa4ca06d241e3a52a78a6f1676d98.jpg",
				"http://img10.jiuxian.com/bill/2016/1227/bb793c486dae4b2a8ea6bd6d99746078.jpg",
				"http://img07.jiuxian.com/bill/2016/1226/b6c7c0f581d142e9b99a37e5c26072b6.jpg",
				"http://img07.jiuxian.com/bill/2016/1227/5836c6ea9e0b4cb3a373b3a9fcbeb2e5.jpg",
			]
})
.directive("my",function(){
	return{
		restrict:"EA",
		templateUrl:"common/mySwiper/mySwiper1.html",
		link:function(){
			setTimeout(function(){
				var mySwiper = new Swiper('.swiper-containero', {
					autoplay: 2000,//可选选项，自动滑动(时间:毫秒)
					loop : true,//循环
					pagination : '.swiper-pagination',//分页器
				})
			},10)
		}
	}
})

.directive("mySwiper",function(){
	return{
		restrict:"EA",
		templateUrl:"common/mySwiper/mySwiper.html",
		link:function(){
			setTimeout(function(){
				var mySwiper = new Swiper('.swiper-containert', {
						slidesPerView: 0,
				        paginationClickable: true,
				        pagination: '.swiper-pagination',
				        slidesPerView: 3,
				        paginationClickable: true,
				        freeMode: true
   					})

			},10)
		}
	}
})

