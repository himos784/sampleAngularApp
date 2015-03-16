angular.module('spa', ['ui.router']);

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
		password : 'super-admin',
		gender : 'male',
		position_status : 'admin',
	}
];

var user_data = {};