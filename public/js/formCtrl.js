var formCtrl = angular.module('formCtrl', ['tService']);
formCtrl.controller('formCtrl', function($scope, $http, tService) {

  // Initializing the formList model
  $scope.formList = [];

  $scope.formFields = {};

  // Making the GET call to the api endpoint to get list of order forms
  $http.get('http://api.conceptdrop.com/api/OrderForms/')
    .success( function (data) {
      $scope.formList = tService.getFormData(data);
    });

  $scope.getFormFields = function(event) {
    var reqId = event.target.id;

    $scope.formFields = tService.getFormFields(reqId);
  };
});
