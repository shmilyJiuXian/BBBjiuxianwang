angular.module('projectDemo.homePage',[])
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
  .state({
    name:'home',
    url:'/home',
    css:'pages/home/home.css',
    templateUrl:'pages/home/home.html',
  })
  

})
.controller("ctrHome",function($scope,$http){
      $http.get("pages/home/json/limittime.json")
      .success(function(data){
        $scope.miao = data.killProList
        console.log(data.killProList[0].proPrice)
      })
  		$http.get("pages/home/json/home.json")
  		.success(function(data){
  			$scope.data=data.hashMapList;
  		})
  		
  })
