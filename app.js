var app = angular.module('pocApp', []);
app.controller('ListController', function ($scope) {
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
});
