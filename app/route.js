angular
    .module('spa')
    .config(function($stateProvider, $urlRouterProvider,$httpProvider) {
        /*$httpProvider.defaults.transformRequest = function(data){
            if (data === undefined) {
                return data;
            }
            return serialize(data);
        };

        // set all post requests content type
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';*/
        
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