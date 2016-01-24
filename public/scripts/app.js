var app = angular.module('beerNWineApp', ['ngRoute']);

// route configuration
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
      .when('/profile', {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/signup', {
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
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

app.controller('ProfileCtrl', ['$scope', function($scope) {
  $scope.profileTest = "Welcome to the profile page";
}]);

app.controller('SignupCtrl', ['$scope', function($scope) {
  $scope.signupTest = "Welcome to the signup page";
}]);

app.controller('LoginCtrl', ['$scope', function($scope) {
  $scope.loginTest = "Welcome to the login page";
}]);