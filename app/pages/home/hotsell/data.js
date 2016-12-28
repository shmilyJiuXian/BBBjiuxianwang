 angular.module('dataModule',[])
  .controller('ctrl',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/rank1.json')
        .success(function(res){
            console.log(res)         
           // $scope.items = res.goodsCate.list;
        })
  })
   .controller('ctrl2',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/rank2.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;
                      
        })
        
  })
  .controller('cleargoods1',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/01.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;
                      
        })
        
  })
  .controller('cleargoods2',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/02.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;
                      
        })
        
  })
  /*---------------------获取热卖好酒数据-------------------------*/
 //爆款top榜
  .controller('hotsell1',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/top.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;                      
        })
        
  })
  //整箱囤货
  .controller('hotsell2',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/tunhuo.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;                      
        })
        
  })
  //进口大牌
   .controller('hotsell3',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/jinkou.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;                      
        })
        
  })
   //鼎力推荐
    .controller('hotsell4',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/tuijian.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;                      
        })
        
  })
  /*---------------------获取手机专享数据------------------------*/
 .controller('phone_white',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/phone.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.list1;                      
        })
        
  })
 .controller('phone_red',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/phone.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.list2;                      
        })
        
  })
 .controller('phone_yellow',function($scope,$http){
        // console.log($http)
        $http.get('pages/home/json/phone.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.list3;                      
        })
        
  })