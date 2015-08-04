'use strict';

/**
 * @ngdoc function
 * @name doitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doitApp
 */
angular.module('doitApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    // this.todos = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    this.name = "my name";
    var todosInStore = localStorageService.get('todos'); 
    this.todos = todosInStore || []; 
    // this.$watch('todos', function(){
    // 	localStorageService.set('todos', this.todos);
    // }, true);


    this.addTodo = function(){
	if (this.todo !== ''){
		this.todos.push(this.todo);
		//localStorageService.set('todos', this.todos);
		this.todo = '';
	} 
    };

    this.removeTodo = function(index){
    	this.todos.splice(index, 1);
    };
  // var todosInStore = localStorageService.get('todos');

  //   $scope.todos = todosInStore || [];

  //   $scope.$watch('todos', function () {
  //     localStorageService.set('todos', $scope.todos);
  //   }, true);

  //   $scope.addTodo = function () {
  //     $scope.todos.push($scope.todo);
  //     $scope.todo = '';
  //   };

  //   $scope.removeTodo = function (index) {
  //     $scope.todos.splice(index, 1);
  //   };

  });
