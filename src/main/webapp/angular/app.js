angular.module("YongApp", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/free-board", {templateUrl : "freeboard.html", controller : "freeCtrl"})
            .when("/write-board", {templateUrl : "writeboard.html", controller : "writeCtrl"})
            .when("/detail-board/:boardIdx", {templateUrl : "detailboard.html", controller : "detailCtrl"});
    }])
    .controller("homeCtrl", ["$scope", "$route", function($scope, $route){

    }])
    .controller("freeCtrl", ["$scope", "$http", function($scope, $http){
        $http({
            url : "/getBoard.json",
            method : "get"
        }).then(function success(res){
            $scope.boardList = res.data;
        }, function error(){

        });

        $scope.goWrite = function(){
            location.href = "#write-board";
        }
    }])
    .controller("writeCtrl", ["$scope", "$http", function($scope, $http){
        $scope.save = function(){
            $http({
                url : "/insertBoard.json",
                method : "post",
                params : {
                    title : $scope.title,
                    contents : $scope.contents,
                    writeName : $scope.writeName
                }
            }).then(function success(){
                location.href = "#free-board";
            }, function error(){

            });
        }
    }])
    .controller("detailCtrl", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
        $http({
            url : "/detailBoard.json",
            method : "get",
            params : {
                boardIdx : $routeParams.boardIdx
            }
        }).then(function success(result){
            $scope.title = result.data.title;
            $scope.contents = result.data.contents;
            $scope.writeName = result.data.writeName;
        }, function error(){

        });
        
        $scope.delete = function(){
            if(!confirm("삭제하시겠습니까?")){ return; }

            $http({
                url : "/deleteBoard.json",
                method : "get",
                params : {
                    boardIdx : $routeParams.boardIdx
                }
            }).then(function success(){
                location.href = "#free-board";
            }, function error(){

            });
        };
        
        $scope.list = function(){
            location.href = "#free-board";
        };
    }]);