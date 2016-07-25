var app = angular.module('ConceptDrop', ['formCtrl', 'fieldCtrl', 'ngRoute'])
        .config(['$routeProvider', function($routeProvider){
          $routeProvider.when('/', {
            controller: 'formCtrl',
            templateUrl: 'partials/formList.html',
          })
          .when('/order', {
            controller: 'formCtrl',
            templateUrl: 'partials/formList.html',
          })
          .when('/order/:type', {
            controller: 'fieldCtrl',
            templateUrl: 'partials/orderForm.html'
          })
          .otherwise( {redirectTo: '/order'} );
  }]);
