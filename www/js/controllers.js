angular.module('starter.controllers', [])

.controller('PuasaCtrl', function($scope, $ionicModal) {

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };  
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('AwesomeController', function($scope) {
    if(typeof analytics !== undefined) { analytics.trackView("Awesome Controller"); }
 
    $scope.initEvent = function() {
        if(typeof analytics !== undefined) { analytics.trackEvent("Category", "Action", "Label", 25); }
    }
})

.controller('AnalyticsCtrl', function($scope) {
    if(typeof analytics !== undefined) { 
      analytics.trackView("Ramadhan App"); 
      analytics.trackView("Screen Title"); 
    }
 
    $scope.initEvent = function() {
        if(typeof analytics !== undefined) { 
          analytics.startTrackerWithId('UA-XXXX-YY');
          analytics.trackView('Screen Title');
          analytics.trackEvent("Category", "Action", "Label", 25); 
        }
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});