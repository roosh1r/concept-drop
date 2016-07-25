var app = angular.module('ConceptDrop', ['formCtrl', 'ngRoute'])
        .config(function($routeProvider){
          $routeProvider.when('/', {
            controller: 'formCtrl',
            templateUrl: 'partials/formList.html',
          })
          .when('/order', {
            controller: 'formCtrl',
            templateUrl: 'partials/formList.html',
          })
          .when('/form', {
            controller: 'formCtrl',
            templateUrl: function() {
                console.log('router invoked');
                return 'partials/form.html';
            },
          })
          .otherwise( {redirectTo: '/order'} );
        });
