angular
    .module('spa')
    .config(function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('/', {
            url: '/',
        	views: {
        		'': { 
        			templateUrl: 'partials/landing/landing-page.html' 
        		},
        		'login@/': { 
        			templateUrl: 'partials/landing/login.html',
        			controller: 'LoginCtrl'
        		},
        		'register@/': { 
        			templateUrl: 'partials/landing/register.html',
        			controller: 'RegisterCtrl' 
        		},
        	}
        })
        .state('home',{
        	url: '/home',
        	views: {
        		'': {
        			templateUrl: 'partials/home/home.html',
                    controller: 'HomeCtrl'
        		}
        	}
        });
    });