angular.module('spa', ['ngRoute','ui.router']);

var users = [
	{
		first_name : 'Raymund',
		last_name : 'Enso',
		email : 'raymundenso@nexseed.net',
		password : 'onimusha',
		gender : 'male',
		position_status : 'admin',
	},
	{
		first_name : 'Super',
		last_name : 'Admin',
		email : 'super-admin@nexseed.net',
		password : 'superadmin',
		gender : 'male',
		position_status : 'super admin',
	}
];

var user_data = {};

var api_url = "http://localhost/angular_api/";

/*var serialize = function(obj, prefix) {
	var str = [];
	for(var p in obj) {
		if (obj.hasOwnProperty(p)) {
		  var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
		  str.push(typeof v == "object" ?
		    serialize(v, k) :
		    encodeURIComponent(k) + "=" + encodeURIComponent(v));
		}
	}
	return str.join("&");
};*/