var todoApp = angular.module('todoApp', ['ngResource']);

todoApp.controller('AppCtrl', function($scope) {

        //model
        var items = [
            {text: 'Start TODO App', done: true},
            {text: 'Build routes', done: false}
        ];

        //add it to scope
        $scope.items = items;

        $scope.remaining = function() {
          return items.reduce(function(count, item) { //reduce is ECMA5 method on an array
              return item.done ? count : count + 1;
          }, 0);
        };

        //add items function
        $scope.add = function(newItem) {
            var item = {text: newItem.text, done: false};
            items.push(item);
            newItem.text = '';
        };
    }
);