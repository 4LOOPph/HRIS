'use strict';

angular.module('myApp')
	.directive('header', function(){
		return{
			restrict: 'AE',
			templateUrl: 'app/shared/header/header.html',
		};
	})
	.directive('addEmployeeHeader', function(){
		return{
			restrict: 'AE',
			templateUrl: 'app/shared/header/addEmployeeHeader.html'
		};
	})
	.directive('payrollPeriodHeader', function(){
		return{
			restrict: 'AE',
			templateUrl: 'app/shared/header/payrollPeriodHeader.html'
		};
	})
