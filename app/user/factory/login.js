angular
	.module('spa')
	.factory('loginFactory', loginFactory);

loginFactory.$inject = ['$resource'];

function loginFactory($resource){
	// console.log(api_url+'login.php');
	return $resource(api_url+'login.php',{});
}