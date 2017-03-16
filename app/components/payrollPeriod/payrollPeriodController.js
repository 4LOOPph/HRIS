'use strict';

angular.module('myApp')
    .run(function(editableOptions) {
        editableOptions.theme = 'bs3';
    })
    .controller('payrollPeriodController', function($scope, $http, $filter) {
        $http.get('assets/js/employees.json').then(function(response) {
            //view payroll period
            $scope.payrollPeriod = response.data.payrollPeriod;
            //angular-xeditable (month dropdown)
            $scope.user = {
                status: 2
            };
            $scope.statuses = [
                { value: 1, text: 'January' },
                { value: 2, text: 'February' },
                { value: 3, text: 'March' },
                { value: 4, text: 'April' },
                { value: 5, text: 'May' },
                { value: 6, text: 'June' },
                { value: 7, text: 'July' },
                { value: 8, text: 'August' },
                { value: 9, text: 'September' },
                { value: 10, text: 'October' },
                { value: 11, text: 'November' },
                { value: 12, text: 'December' }
            ];
            $scope.showStatus = function() {
                var selected = $filter('filter')($scope.statuses, { value: $scope.user.status });
                return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
            };
            //angular-xeditable (date picker)
            $scope.user = {
                dob: new Date(1984, 4, 15)
            };
            $scope.opened = {};
            $scope.open = function($event, elementOpened) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened[elementOpened] = !$scope.opened[elementOpened];
            };
        });
    });
