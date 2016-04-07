angular.module("YongApp", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/free-board", {templateUrl : "freeboard.html", controller : "freeCtrl"})
            .when("/QA-board", {templateUrl : "qaboard.html", controller : "qaCtrl"});
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
    }])
    .controller("qaCtrl", ["$scope", function($scope){
        
    }]);

function Board(title, date, name){
    this.title = title;
    this.writeDate = date;
    this.writeName = name;
}