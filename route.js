/*app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/landing-page.html',
		controller: 'UserCtrl'
	}).
	when('/sample', {
		templateUrl: 'partials/sample.html'
		// controller: 'PhoneListCtrl'
	});
}]);*/
app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('/', {
        url: '/',
    	views: {
    		'': { 
    			templateUrl: 'partials/landing-page.html' 
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