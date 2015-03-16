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