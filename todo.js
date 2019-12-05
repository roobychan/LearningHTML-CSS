(function(){
    'use strict';

    angular
        .module('Todo', []).controller('TodoController', function TodoController($scope){
          $scope.todoList = [{
            name: 'abc',
            isDone: false
          },{
            name: 'efd',
            isDone: true
          }
        ];

          this.add = function (name) {
            $scope.todoList.push({
              name: name,
              isDone: false
            });
          };

          this.delete = function (index) {
            this.todoList = $scope.todoList.splice(index, 1);
          };
        });

}());