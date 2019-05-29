let app = angular.module('app', ['ngMaterial', 'ngMessages', "ngRoute"]);

app.controller('myCtrl', function ($http, $scope) {
    const MIN_RANDOM_VALUE = 200;
    const MAX_RANDOM_VALUE = 400;
    $scope.square = "empty";
    $scope.showPage1 = 1;
    $scope.arraySquare = []
    $scope.myColor =["#FF00FF", "#0000FF", "#00FF00","#00FFFF","#fff000"];
    $http.get("http://localhost:3000/getDataSquare",
        {
            params: {
                square:$scope.square
            }
        }).then(function(promise){
            console.log(promise)
            $scope.square = promise.data;
    });
    $scope.squareID = document.getElementById("blockSquare");
    $scope.squareID.style.background = "#fff000";
    var marginM = -100;
    var marginLeft = -100;
    var testVal = 20;
    var valueLeft = 30;
    var valueTop = 20;

    setInterval(function(){
        marginM= marginM-valueTop;
        marginLeft = marginLeft+valueLeft;
        if(marginM <-440 || marginM>340){
            valueTop=valueTop*(-1);
        }
        if(marginLeft<-1010 || marginLeft>700){
            valueLeft=valueLeft*(-1);
        }
        $scope.$apply( ()=> {
                $scope.squareID.style.marginTop = String(marginM) + "px"
            }
        );
        $scope.$apply( () => {
                $scope.squareID.style.marginLeft = String(marginLeft) + "px"
            }
        );
    },50)
    setInterval(function(){
        $scope.$apply(
            () => { $scope.squareID.style.background = $scope.myColor[Math.floor(Math.random()*$scope.myColor.length)]}
        );

    },1000);
    $scope.ramdomObjectSquery = function(kordinate){

        var randomValue = parseInt(Math.random() * (MAX_RANDOM_VALUE - MIN_RANDOM_VALUE) + MIN_RANDOM_VALUE);
        var randomKordinate = parseInt(Math.random() * (kordinate - (kordinate-100)) + kordinate-100);
        let oneSquery = {};
        oneSquery.height = randomValue;
        oneSquery.kordinate = randomKordinate;
        console.log(oneSquery);
        return oneSquery;


    }
    $scope.randomSquery = function(){
        for(var i = 1;i<8;i++){
            $scope.arraySquare.push($scope.ramdomObjectSquery(i*100));
        }
        console.log($scope.arraySquare);

    }
    $scope.showTask  = function(page){
        if(page==1){
            $scope.showPage1 = true;
            $scope.showPage2 = null;
            $scope.showPage3 = null;


        } else if(page==3){
            $scope.randomSquery();
            $scope.showPage3 = true;
            $scope.showPage1 = null;
            $scope.showPage2 = null;

        } else if(page == 2){
            $scope.showPage2 = true;
            $scope.showPage3 = null;
            $scope.showPage1 = null;

        }
    }

});
app.controller('lab2_2', function($http, $scope){
    $scope.lakk = "TESTTTT";
})

app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: 'index.html',
            controller: 'myCtrl'
        });
        $routeProvider.when("/lab", {
            templateUrl: 'laba2_2.html',
            controller: 'lab2_2'
        });
});