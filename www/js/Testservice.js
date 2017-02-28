angular.module('Testservice', [])
.factory('service', function($http) {

    return {
        all: function(response) {
            return $http.get('http://carbillet.net/api-digitalGrenoble/users/')
        }
    }
});