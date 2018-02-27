(function() {
    
    // function TodoService (){
    //     var todoItems = [];
    //     return {
    //         setData: setData,//get rid of this one?
    //         getData: getData
    //         //addTask
    //         //removeTask
    //     }
    //     function setData (todoList){
    //         todoItems = todoList;
    //         console.log(todoItems);
    //     }
    //     function getData(){
    //         return todoItems;
    //     }
    // }
    

    // angular
    //     .module("App")
    //     .factory("TodoService", TodoService);


function TodoService (){
    var todoItems = [{}];
    return {
        getAllTasks: getAllTasks,
        addTask: addTask,
        removeTask: removeTask
    }
    function getAllTasks (){
        return $http({
            method: "GET",
            url: "/tasks"
        }).then(function(response){
            return response.data;
        })
    };
    function addTask (task){
        return $http({
            method: "POST", 
            url:"/tasks"
            data: task
        });
    };
    function removeTask (taskId){
        return $http ({
            method: "DELETE",
            url:"/tasks/" + taskId
        });
    };
}


var app = angular.module("App");
app.factory("TodoService", TodoService);

})();