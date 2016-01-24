var app = angular.module('reWinedApp', ['ngRoute', 'ngResource']);

// route configuration
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
      .when('/search', {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      })
      .when('/wines', {
        templateUrl: 'templates/wines.html',
        controller: 'WineCtrl'
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

// resource factory
app.factory('Wine', ['$resource', function($resource) {
  return $resource(baseUrl, {name: "@name", name2: "@name2", type: "@type", year: "@year" }, {
    query: {
      isArray: true,
      transformResponse: function(data) {
        return angular.fromJson(data).Products.List;
      }
    }
  });
}]);


// :name+:name2+:type+:year

// controllers
app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.homeTest = "Welcome to the homepage";
}]);

app.controller('Ctrl', ['$scope', function($scope) {
  $scope.homeTest = "Welcome to the homepage";
}]);

app.controller('WineCtrl', ['$scope', function($scope) {
  $scope.winesTest = "Welcome to the profile page";
}]);
