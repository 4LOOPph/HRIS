'use strict';

angular.module('myApp')
	.directive('navbar', function(){
		return{
			restrict: 'AE',
			templateUrl: 'app/shared/navbar/navbar.html'
		};
	});