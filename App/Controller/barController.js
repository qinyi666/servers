/**
 * Created by 橘子到底酸不酸 on 2017/10/19.
 */
app.controller("barController", ["$scope", "barServer", function ($scope, barServer) {
    barServer.getProductd("GET","./Data/bar.json").then(function(result){

        $scope.product=result.data;
        console.log(result.data);
    })

}]);