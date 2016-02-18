angular.module('devMtIn');

myApp.controller('homeCtrl', function($scope, profileService, friendService) {

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
        friendService.findFriendsFriends(profile.data); // Finding second level friends.
      })
      .catch(function(err) {
        console.error(err);
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
      profileService.deleteProfile()
      .then(function(deletedProfile) {
        localStorage.removeItem('profileId');
        $scope.myProfile = {};
      })
      .catch(function(err) {
        console.log(err);
      });
    }

    $scope.findFriends = function(query) {
      friendService.findFriends($scope.myProfile._id, query).then(function(response) {
        $scope.potentialFriends = response.data;
      })
    }

    $scope.addFriend = function(friendId) {
      friendService.addFriend($scope.myProfile._id, friendId).then(function() {
        $scope.checkForProfile();
      })
    }

    $scope.removeFriend = function(friendId) {
      friendService.removeFriend($scope.myProfile._id, friendId).then(function() {
        $scope.checkForProfile();
      })
    }

});
