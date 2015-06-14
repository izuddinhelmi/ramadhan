// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.puasa', {
    url: '/puasa',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/tab-puasa.html',
        controller: 'PuasaCtrl'
      }
    }
  })

  .state('tab.puasa-definisi', {
    url: '/puasa/definisi',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/definisi.html',
      }
    }
  })

  .state('tab.puasa-syarat', {
    url: '/puasa/syarat',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/syarat-wajib.html',
      }
    }
  })

  .state('tab.puasa-niat', {
    url: '/puasa/niat',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/niat.html',
      }
    }
  })

  .state('tab.puasa-pembatalan', {
    url: '/puasa/pembatalan',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/batal.html',
      }
    }
  })

  .state('tab.puasa-sunat', {
    url: '/puasa/sunat',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/sunat.html',
      }
    }
  })

  .state('tab.puasa-makruh', {
    url: '/puasa/makruh',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/makruh.html',
      }
    }
  })

  .state('tab.puasa-uzur', {
    url: '/puasa/uzur',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/uzur.html',
      }
    }
  })

  .state('tab.puasa-qadha', {
    url: '/puasa/qadha',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/qadha.html',
      }
    }
  })

  .state('tab.puasa-fidyah', {
    url: '/puasa/fidyah',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/fidyah.html',
      }
    }
  })

  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })
  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

  .state('tab.zakat', {
    url: '/zakat',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/tab-zakat.html',
      }
    }
  })

  .state('tab.zakat-definisi', {
    url: '/zakat/definisi',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/definisi.html',
      }
    }
  })

  .state('tab.zakat-syarat', {
    url: '/zakat/syarat',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/syarat.html',
      }
    }
  })

  .state('tab.zakat-waktu', {
    url: '/zakat/waktu',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/waktu.html',
      }
    }
  })

  .state('tab.zakat-lafaz', {
    url: '/zakat/lafaz',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/lafaz.html',
      }
    }
  })

  .state('tab.zakat-kadar', {
    url: '/zakat/kadar',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/kadar.html',
      }
    }
  })

  .state('tab.waktu', {
    url: '/waktu',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/tab-waktu.html',
      }
    }
  })

  .state('tab.waktu-perlis', {
    url: '/waktu/perlis',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perlis.html',
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/puasa');

});
