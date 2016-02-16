var myApp = angular.module('devMtIn');

myApp.controller('homeCtrl', function($scope) {
  $scope.myProfile = {
    friends: [{name: 'Kory'}, {name: 'Tyler'}, {name: 'Geoff'}]
  };

  $scope.sortOptions = [{
    display: 'Ascending',
    value: false
  },
  {
    display: 'Descending',
    value: true
  }
    ];

});
