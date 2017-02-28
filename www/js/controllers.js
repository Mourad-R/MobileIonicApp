angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicLoading) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

//   $ionicLoading.show({
//   template: '<ion-spinner></ion-spinner> <br/> Chargement'
// });



  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae, by the way i love Bob Marley music', id: 1 },
    { title: 'Chill from Marseille', id: 2 },
    { title: 'Ionic and cordova what else', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap Trap', id: 5 },
    { title: 'Je vais me tourner ver le dev Mobile rapidement je crois', id: 6 },
    { title: 'My own playlist this tool is fucking amazing', id: 7 }
  ];
})

.controller('ApiuseridCrtl', function($scope, $http, $stateParams, service) {
    $scope.check = {};
    console.log($stateParams);

    service.all().then(function successCallback( response )  {
      for (var i = 0; i < response.data.users.length; i++) {
        if ($stateParams.idUser == response.data.users[i].idUser) {
          $scope.check = response.data.users[i];
        }
      }
      console.log($scope.check);
    });
})

.controller('ApiCrtl', function($scope,service) {
   
    service.all().then(function successCallback( response ) {
          
        $scope.users = response.data.users;
        console.log($scope.users);

        }, function errorCallback( error ) {
          
          console.log('Error');

        })
        
})


// $scope.updateUsers = function() {
//   console.log(data);
//         url = 'http://carbillet.net/api-digitalGrenoble/users/';
//         datajson: JSON.stringify(obj),
        
//         $http.put(url, datajson).success(function(data){

//         });
//     }

.controller('MapCtrl', function($scope, $cordovaGeolocation) {

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {

      var lat  = position.coords.latitude
      var long = position.coords.longitude

        $scope.map = {
        center: [lat , long
]
      }

        $scope.marker = {
        position: [lat , long
],

        options: function(){
          return {
            draggable: true
          }
        },
        events: {
          click: function(e) {
            alert(e.latLng)
          }
        }
      }
    })

    }, function(err) {
      // error
    })
.controller('PlaylistCtrl', function($scope, $stateParams) {
});






// .controller('ApiCrtl', function($scope, $http) {

//   $scope.users = {};

//   $scope.getusers = function() {

//     $http.get('http://carbillet.net/api-digitalGrenoble/users/').success(function (data) {
//       console.log(data.users);
//       $scope.users = data.users;
//     });
//   };
// })
