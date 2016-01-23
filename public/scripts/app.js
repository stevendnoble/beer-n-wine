var app = angular.module('meanApp', ['ngRoute']);

// route configuration
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);

// controllers
app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.homeTest = "Welcome to the homepage";
}]);