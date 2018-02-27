(function() {
    // var taskForm = {
    //     templateUrl: "partials/taskForm.html",
    //     controller: function(TodoService) {
    //     	var $ctrl = this;
    //         $ctrl.todoList = [];
    //         $ctrl.addItem = function(item){
    //         	$ctrl.todoList.push(item);
    //         	console.log(item);
    //         	$ctrl.item = "";
    //         }
    //         $ctrl.TodoService = function (todoList){
    //             console.log(todoList);
    //             TodoService.setData(todoList);
    //         };
    //     }
    // };





    // angular
    //     .module("App").component("taskForm", taskForm);

    var taskForm = {
        templateUrl: "partials/taskForm.html",
        controller: function (TodoService){
            var $ctrl = this;
            $ctrl.todoList = []
        }
    }








var app = angular.module("App");
app.component("taskForm", taskForm);




})();