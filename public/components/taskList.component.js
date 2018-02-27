(function() {
    var taskList = {
        bindings: {
            todoList: "<"
        },
        templateUrl: "partials/taskList.html",
        controller: function(TodoService) {
            var $ctrl = this;
            $ctrl.listToDisplay = TodoService.getData();
            console.log($ctrl.listToDisplay);
            $ctrl.removeItem = function(item) {
                $ctrl.todoList.splice(item, 1);
            }
        }
    }










    angular.module("App").component("taskList", taskList);


})();