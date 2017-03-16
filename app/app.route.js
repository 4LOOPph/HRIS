'use strict';

angular.module('myApp', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'xeditable'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'app/components/login/login.html'
		})
		.state('forgot', {
			url: '/forgot',
			templateUrl: 'app/components/login/forgot.html'
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'app/components/dashboard/dashboard.html'
		})
		.state('employees', {
			url: '/employees',
			templateUrl: 'app/components/employees/employees.html'
		})
		.state('addEmployee', {
			url: '/employees/addEmployee',
			templateUrl: 'app/components/addEmployee/addEmployee.html'
		})
		.state('payrollPeriod', {
			url: '/payrollPeriod',
			templateUrl: 'app/components/payrollPeriod/payrollPeriod.html'
		})
		.state('workSchedule', {
			url: '/workSchedule',
			templateUrl: 'pages/workSchedule.html'
		})
		.state('attendanceMonitoring', {
			url: '/attendanceMonitoring',
			templateUrl: 'pages/attendanceMonitoring.html'
		})
		.state('reports', {
			url: '/reports',
			templateUrl: 'pages/reports.html'
		})	
		.state('settings', {
			url: '/settings',
			templateUrl: 'pages/settings.html'
		});
	$urlRouterProvider.otherwise('/login');
	});