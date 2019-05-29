let app = angular.module('app', ['ngMaterial', 'ngMessages', "ngRoute"]);

app.controller('myCtrl', function ($http, $scope) {
    $scope.test = "Hello World!";
    $scope.name = "";
    $scope.showName = function () {
        if($scope.name) {
            alert("Привет " + $scope.name);
        } else alert("Некоректно введено имя!(Возможно ввели с маленькой буквы!)");
    }
})