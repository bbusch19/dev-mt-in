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

  this.checkForProfile = function(profileId) {
    return $http({
      method: 'GET',
      url: baseUrl + 'api/profiles/' + profileId
    });
  }

  this.deleteProfile = function() {
    localStorage.removeItem('profile');
  }

});
