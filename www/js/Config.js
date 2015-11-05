var ionic2module = angular.module('IOnicProj2', ['ionic']);

ionic2module.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('HomeState',{
		url:'/',
		templateUrl:'../pages/home.html',
		controller:'HomeCtrl'
	});
	$stateProvider.state('ResultsState',{
		url:'/results',
		templateUrl:'../pages/results.html',
		controller:'ResultsCtrl',
		params:{items:null}

	});
	$stateProvider.state('DetailState',{
		url:'/detail',
		templateUrl:'../pages/detail.html',
		controller:'DetailCtrl',
		params:{itemId:null}
	})

	$urlRouterProvider.otherwise("/");

});
