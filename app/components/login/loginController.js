'use strict';

angular.module('myApp')
    .controller('loginMessageController', function($scope, $http) {
        $http.get('assets/js/users.json').then(function(response) {
            $scope.submit = function() {
                var username = $scope.user;
                var password = $scope.pass;
                if (username == response.data.users[0].UserName && password == response.data.users[0].Password) {
                    $scope.loginMessage = 'You are login!';
                } else if (username !== response.data.users[0].UserName && password == response.data.users[0].Password) {
                    $scope.loginMessage = 'Incorrect username';
                } else if (username == response.data.users[0].UserName && password !== response.data.users[0].Password) {
                    $scope.loginMessage = 'Incorrect password';
                } else if (username !== response.data.users[0].UserName && password !== response.data.users[0].Password) {
                    $scope.loginMessage = 'Username and Password did not match';
                };
            };
        });
    });
