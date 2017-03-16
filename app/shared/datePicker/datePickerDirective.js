'use strict';

angular.module('myApp')
	.directive('datePicker', function(){
		return{
			restrict: 'AE',
			templateUrl: 'app/shared/datePicker/datePicker.html'
		};
	});