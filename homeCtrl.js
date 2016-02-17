angular.module('devMtIn');

myApp.controller('homeCtrl', function($scope, profileService) {

  $scope.editing = false;

  $scope.saveProfile = function(profile) {
    profileService.saveProfile(profile);
    $scope.editing = false;
  }

  $scope.checkForProfile = function() {
    var profileId = JSON.parse(localStorage.getItem('profileId'));

    if (profileId) {
      profileService.checkForProfile(profileId.profileId)
      .then(function(profile) {
        $scope.myProfile = profile.data;
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  }
  $scope.checkForProfile();

  $scope.sortOptions = [{
    display: 'Ascending',
    value: false
  },
  {
    display: 'Descending',
    value: true
  }
    ];

    $scope.deleteProfile = function() {
      profileService.deleteProfile();
      $scope.myProfile = profileService.checkForProfile();
    }

});
