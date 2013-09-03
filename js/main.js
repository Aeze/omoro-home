var app = angular.module('omoro-home', ['firebase']);


app.controller('LinkCtrl', ['$scope', 'angularFireCollection',
  function LinkCtrl($scope, angularFireCollection) {
    var url = 'https://omoro-home.firebaseio.com/links';
    $scope.items = angularFireCollection(url);
  }
]);

var chatRef = new Firebase('https://omoro-home.firebaseio.com');
var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
  } else {
    // user is logged out
  }
});


auth.login('password', {
  email: 'marcus.orochena@gmail.com',
  password: 'firebase978',
  rememberMe: true
});
