﻿tutorialApp.controller('userController',
    ['$scope', 'userDataService', '$location',
    function controller($scope, userDataService) {

    $scope.users = [];
    $scope.user = null;
    $scope.editMode = false;

    //get User
    $scope.get = function () {
        $scope.user = this.user;
        $('#viewModal').modal('show');
    };

    //get all Users
    $scope.getAll = function () {
        //userFactory.getUsersList().success(function (data) {
        //    $scope.users = data;
        //}).error(function (data) {
        //    $scope.error = "An Error has occured while Loading users! " + data.ExceptionMessage;
        //});
    };

    // add User
    $scope.add = function () {
        //var currentUser = this.user;
        //if (currentUser != null && currentUser.Name != null && currentUser.Address && currentUser.ContactNo) {
        //    userFactory.addUser(currentUser).success(function (data) {
        //        $scope.addMode = false;
        //        currentUser.UserId = data;
        //        $scope.users.push(currentUser);

        //        //reset form
        //        $scope.user = null;
        //        // $scope.adduserform.$setPristine(); //for form reset

        //        $('#userModel').modal('hide');
        //    }).error(function (data) {
        //        $scope.error = "An Error has occured while Adding user! " + data.ExceptionMessage;
        //    });
        //}
    };

    //edit user
    $scope.edit = function () {
        $scope.user = this.user;
        $scope.editMode = true;
        $('#userModel').modal('show');
    };

    //update user
    $scope.update = function () {
        //var currentUser = this.user;
        //userFactory.updateUser(currentUser).success(function (data) {
        //    currentUser.editMode = false;

        //    $('#userModel').modal('hide');
        //}).error(function (data) {
        //    $scope.error = "An Error has occured while Updating user! " + data.ExceptionMessage;
        //});
    };

    // delete User
    $scope.delete = function () {
        //currentUser = $scope.user;
        //userFactory.deleteUser(currentUser).success(function (data) {
        //    $('#confirmModal').modal('hide');
        //    $scope.users.pop(currentUser);

        //}).error(function (data) {
        //    $scope.error = "An Error has occured while Deleting user! " + data.ExceptionMessage;

        //    $('#confirmModal').modal('hide');
        //});
    };

    //Model popup events
    $scope.showadd = function () {
        $scope.user = null;
        $scope.editMode = false;
        $('#userModel').modal('show');
    };

    $scope.showedit = function () {
        $('#userModel').modal('show');
    };

    $scope.showconfirm = function (data) {
        $scope.user = data;
        $('#confirmModal').modal('show');
    };

    $scope.cancel = function () {
        $scope.user = null;
        $('#userModel').modal('hide');
    }

    // initialize your users data
    //$scope.getAll();
    }]);