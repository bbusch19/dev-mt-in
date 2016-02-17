angular.module('devMtIn')

myApp.service('profileService', function($http) {

  var baseUrl = "http://connections.devmounta.in/";

  this.saveProfile = function(profile) {
    return $http({
      method: 'POST',
      url: baseUrl + 'api/profiles/',
      data: profile
    })
    .then(function(profileResponse) {
        console.log(profileResponse);
        localStorage.setItem('profileId', JSON.stringify({ profileId: profileResponse.data._id }));
    })
    .catch(function(err) {
        console.log(err);
})
  }

  this.checkForProfile = function() {
    if (localStorage.getItem('profile')) {
      return JSON.parse(localStorage.getItem('profile'));
    }
  }

  this.deleteProfile = function() {
    localStorage.removeItem('profile');
  }

});
