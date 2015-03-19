angular
	.module('spa')
	.factory('userFactory', userFactory);

userFactory.$inject = ['$http','$q','serializeFormPostData'];

function userFactory($http,$q,serializeFormPostData){
	var service = {
		getAllUsers : getAllUsers,
		getByIdUser : getByIdUser,
        getPaginateUsers : getPaginateUsers,
        createUser : createUser,
        updateUser : updateUser,
		deleteUser : deleteUser
	};

	return service;

	function getAllUsers(){
		deferred = $q.defer();
        $http.get(api_url+'users.php')
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (e) {
                deferred.reject(e);
            });
        return deferred.promise;
	}

	function getByIdUser(id){
		deferred = $q.defer();
        $http.get(api_url+'users.php?user_id='+id)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (e) {
                deferred.reject(e);
            });
        return deferred.promise;
	}

	function getPaginateUsers(page_number){
		deferred = $q.defer();
        $http.get(api_url+'users.php?page_number='+pageNumber)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (e) {
                deferred.reject(e);
            });
        return deferred.promise;
	}

    function createUser(data){
        var req = {
            url: api_url+'create_user.php',
            method: 'POST',
            transformRequest: serializeFormPostData,
            data: data,
        };
        deferred = $q.defer();
        $http(req)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (e) {
                deferred.reject(e);
            });
        return deferred.promise;
    }

    function updateUser(id,data){
        var req = {
            url: api_url+'update_user.php?user_id='+id,
            method: 'POST',
            transformRequest: serializeFormPostData,
            data: data,
        };
        deferred = $q.defer();
        $http(req)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (e) {
                deferred.reject(e);
            });
        return deferred.promise;
    }

    function deleteUser(id){
        var req = {
            url: api_url+'delete_user.php?user_id='+id,
            method: 'GET',
        };
        deferred = $q.defer();
        $http(req)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (e) {
                deferred.reject(e);
            });
        return deferred.promise;
    }
}