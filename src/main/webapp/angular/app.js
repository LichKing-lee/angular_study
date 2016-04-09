angular.module("YongApp", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/free-board", {templateUrl : "freeboard.html", controller : "freeCtrl"})
            .when("/write-board", {templateUrl : "writeboard.html", controller : "writeCtrl"});
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
    }]);

function Board(title, contents, date, name){
    this.title = title;
    this.contents = contents;
    this.writeDate = date;
    this.writeName = name;
}