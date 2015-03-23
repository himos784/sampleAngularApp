angular
    .module('spa')
    .config(function($stateProvider, $urlRouterProvider,$httpProvider) {
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
        .state('view-user',{
            url: '/user/:id',
            templateUrl: 'partials/user/view.html',
            controller: 'ViewUserCtrl'
        })
        .state('delete-user',{
            url: '/user/delete/:id',
            controller: 'DeleteUserCtrl'
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