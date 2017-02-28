// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'Testservice', 'ngMaps', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.getapi', {
      url: '/getapi',
      views: {
        'menuContent': {
          templateUrl: 'templates/api.html',
          controller: 'ApiCrtl'
        }
      }
    })

    .state('app.getapiwithid', {
      url: '/getapi/:idUser',
      views: {
        'menuContent': {
          templateUrl: 'templates/apisave.html',
          controller: 'ApiuseridCrtl'
        }
      }
    })
   .state('app.getmaps', {
      url: '/getmaps',
      views: {
        'menuContent': {
          templateUrl: 'templates/maps.html',
          controller: 'MapCtrl'
        }
      }
    })
   .state('app.getmarker', {
      url: '/getmaps',
      views: {
        'menuContent': {
          templateUrl: 'templates/markeruser.html',
          controller: 'ApiCtrl'
        }
      }
    })
   .state('app.ngmodel', {
      url: '/ngmodel',
      views: {
        'menuContent': {
          templateUrl: 'templates/ngmodel.html',
          controller: 'ngmodelCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
// .config(function($urlRouterProvider) {
//   $routeProvider.when('/getapi', {
//     templateUrl: 'templates/api.html',
//     controller: 'ApiCrtl'
//   })
//   $routeProvider.when('/getapi/:idUser', {
//     templateUrl: 'templates/apisave.html',
//     controller: 'ApiuseridCrtl'
//   })
//   $routeProvider.otherwise({
//     redirectTo: 'templates/menu.html'
//   })
// })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
