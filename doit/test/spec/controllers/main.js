'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('doitApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no todo items to start', function(){
       expect(MainCtrl.todos.length).toBe(3);
  });
  it('should add items to the list', function(){
    MainCtrl.todo = "Test adding todo";
    MainCtrl.addTodo();
    expect(MainCtrl.todos.length).toBe(4);
  }); 

  it('should revmoe an item from the list', function(){
    MainCtrl.todo = 'Test adding todo'; 
    MainCtrl.addTodo();
    MainCtrl.removeTodo(0); 
    expect(MainCtrl.todos.length).toBe(3);
  });


  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(MainCtrl.awesomeThings.length).toBe(3);
  // });
});
