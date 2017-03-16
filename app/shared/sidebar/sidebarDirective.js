'use strict';

angular.module('myApp')
	.directive('sidebar', function(){
		return{
			restrict: 'AE',
			templateUrl: 'app/shared/sidebar/sidebar.html'
		};
	});