/**
 * Created by 橘子到底酸不酸 on 2017/10/19.
 */
app.controller("carController", ["$scope", "carServer", function ($scope, carServer) {
    carServer.getProduct("GET","./Data/car.json").then(function(result){
        $scope.products=result.data;
        console.log(result.data);
    })

}]);