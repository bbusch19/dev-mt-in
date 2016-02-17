angular.module('devMtIn')

myApp.service('profileService', function() {

  this.saveProfile = function(profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  this.checkForProfile = function() {
    if (localStorage.getItem('profile')) {
      return JSON.parse(localStorage.getItem('profile'));
    }
    return {
      friends: [{name: 'Geoff'}, {name: 'Kory'}, {name: 'Tyler'}]
    }
  }

});
