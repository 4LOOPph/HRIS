'use strict';

angular.module('myApp')
    .controller('employeesController', function($scope, $http) {
        $http.get('assets/js/employees.json').then(function(response) {
            $scope.employees = response.data.employees;
        });

        $scope.employee = {};
        $scope.employees = [];
        $scope.insertData = function() {
            $scope.employees.push({
                'lastName': $scope.employee.lastName,
                'firstName': $scope.employee.firstName,
                'middleName': $scope.employee.middleName,
                'empID': $scope.employee.empID,
                'jobTitle': $scope.employee.jobTitle,
                'department': $scope.employee.department,
                'jobStatus': $scope.employee.jobStatus
            });
        };

        /**$scope.addEmployee = function(){
        	$http.post(
        		'assets/js/employees.json', 
        		{'lastName':$scope.lastName, 'firstName':$scope.firstName, 'middleName':$scope.middleName, 'empID':$scope.empID, 'jobTitle':$scope.jobTitle, 'department':$scope.department, 'jobStatus':$scope.jobStatus, 'birthdate':$scope:birthdate, 'age':$scope.age, 'sex':$scope.sex, 'civilStatus':$scope.civilStatus, 'presentAddress':$scope.presentAddress, 'provincialAddress':$scope.provincialAddress, 'email':$scope.email, 'contactNumber':$scope.contactNumber, 'contactPerson':$scope.contactPerson, 'contactPersonNumber':$scope.contactPersonNumber, 'dateHired':$scope.dateHired, 'TIN':$scope.TIN, 'SSS':$scope.SSS, 'pagIbig':$scope.pagIbig, 'philHealth':$scope.philHealth}).success(function(data){
        		$scope.lastName = null;
        		$scope.firstName = null;
        		$scope.middleName = null;
        		$scope.empID = null;
        		$scope.jobTitle = null;
        		$scope.department = null;
        		$scope.jobStatus = null;
        		$scope.birthdate = null;
        		$scope.age = null;
        		$scope.sex = null;
        		$scope.civilStatus = null;
        		$scope.presentAddress = null;
        		$scope.provincialAddress = null;
        		$scope.email = null;
        		$scope.contactNumber = null;
        		$scope.contactPerson = null;
        		$scope.contactPersonNumber = null;
        		$scope.dateHired = null;
        		$scope.TIN = null;
        		$scope.SSS = null;
        		$scope.pagIbig = null;
        		$scope.philHealth = null;
        	})
        }**/
    });
