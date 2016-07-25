var formCtrl = angular.module('formCtrl', ['tService']);
formCtrl.filter('setURL', function() {
  return function(item) {
    var temp = item.replace(/\W+/g, '');
    return temp.toLowerCase();
  };
});
formCtrl.controller('formCtrl', function($scope, $http, tService) {

  // Initializing the formList model
  $scope.formList = [];

  var config = {
    method: 'GET',
    url: 'http://api.conceptdrop.com/api/OrderForms/',
    cache: true
  };

  // Making the GET call to the api endpoint to get list of order forms
  $http(config).then( function(response) {
    $scope.formList = tService.getFormData(response.data);
  });
});
