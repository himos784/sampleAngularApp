angular
    .module('spa')
    .config(function($stateProvider, $urlRouterProvider,$httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
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
        		}
        	}
        })
        .state('home',{
        	url: '/home',
        	views: {
        		'': {
        			templateUrl: 'partials/home/home.html',
                    controller: 'HomeCtrl'
        		},
                'users@home': { 
                    templateUrl: 'partials/home/users-table.html',
                    controller: 'HomeCtrl' 
                }
        	}
        })
        .state('logout',{
            url: '/logout',
            views: {
                '': { 
                    templateUrl: 'partials/landing/landing-page.html' 
                }
            }
        });
    });