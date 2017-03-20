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
            $scope.monthSelected = {
                monthID: 2
            };
            $scope.months = [
                { value: 1, month: 'January' },
                { value: 2, month: 'February' },
                { value: 3, month: 'March' },
                { value: 4, month: 'April' },
                { value: 5, month: 'May' },
                { value: 6, month: 'June' },
                { value: 7, month: 'July' },
                { value: 8, month: 'August' },
                { value: 9, month: 'September' },
                { value: 10, month: 'October' },
                { value: 11, month: 'November' },
                { value: 12, month: 'December' }
            ];
            $scope.showMonth = function() {
                var selected = $filter('filter')($scope.months, { value: $scope.monthSelected.monthID });
                return ($scope.monthSelected.monthID && selected.length) ? selected[0].month : 'Not set';
            };
            //angular-xeditable (year dropdown)
           
            //angular-xeditable (payroll term dropdown)
            $scope.payrollTermSelected = {
                payrollTermID: 2
            };
            $scope.payrollTerms = [
                { value: 1, term: 'Monthly' },
                { value: 2, term: 'Bi-monthly: 1st Cut...' },
                { value: 3, term: 'Bi-monthly: 2nd Cut...' }
            ];
            $scope.showPayrollTerm = function() {
                var selected = $filter('filter')($scope.payrollTerms, { value: $scope.payrollTermSelected.payrollTermID });
                return ($scope.payrollTermSelected.payrollTermID && selected.length) ? selected[0].term : 'Not set';
            };
            //angular-xeditable (date picker)
            $scope.dateCovered = {
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
