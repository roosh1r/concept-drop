var fieldCtrl = angular.module('fieldCtrl', ['fService']);
fieldCtrl.controller('fieldCtrl', function($scope, $http, $route, $routeParams, fService) {

  $scope.formFields = {};
  $scope.price = '';
  $scope.priceText = '';
  $scope.currency = '';

  var config = {
    method: 'GET',
    url: 'http://api.conceptdrop.com/api/OrderForms/' + fService.getRequestID($routeParams.type),
    cache: true
  };

  $http(config).then( function(response) {
    var responseObj = response.data;
    fService.getValues(responseObj.OrderFields);
    $scope.formFields = responseObj.OrderFields;
    $scope.priceText = 'Your design order will cost: ';
    $scope.currency = '$';
    $scope.price = responseObj.Price;
  });

  $scope.getInputType = fService.getInputType;
  $scope.validationFlag = fService.validationFlag;

});
