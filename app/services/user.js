(function() {
    'use strict';

    angular
        .module('spa')
        .service('userService', userService);

    userService.$inject = ['$http','serializeFormPostData','restApiFactory'];

    function userService($http,serializeFormPostData,restApiFactory){
        this.getAllUsers = getAllUsers;

        this.getByIdUser = getByIdUser;

        this.getPaginateUsers = getPaginateUsers;

        this.createUser = createUser;

        this.updateUser = updateUser;

        this.deleteUser = deleteUser;

        this.login = login;

        ////////////////

        function getAllUsers(){
            var req = {
                url: api_url+'users.php',
                method: 'GET',
            };
            return restApiFactory.connect(req);
        }

        function getByIdUser(id){
            var req = {
                url: api_url+'users.php?user_id='+id,
                method: 'GET',
            };
            return restApiFactory.connect(req);
        }

        function getPaginateUsers(page_number){
            var req = {
                url: api_url+'users.php?page_number='+pageNumber,
                method: 'GET',
            };
            return restApiFactory.connect(req);
        }

        function createUser(data){
            var req = {
                url: api_url+'create_user.php',
                method: 'POST',
                transformRequest: serializeFormPostData,
                data: data
            };
            return restApiFactory.connect(req);
        }

        function updateUser(id,data){
            var req = {
                url: api_url+'update_user.php?user_id='+id,
                method: 'POST',
                transformRequest: serializeFormPostData,
                data: data,
            };
            return restApiFactory.connect(req);
        }

        function deleteUser(id){
            var req = {
                url: api_url+'delete_user.php?user_id='+id,
                method: 'GET',
            };
            return restApiFactory.connect(req);
        }

        function login(data){
            var req = {
                url: api_url+'login.php',
                method: 'POST',
                transformRequest: serializeFormPostData,
                data: data,
            };
            return restApiFactory.connect(req);
        }
    }
    
})();