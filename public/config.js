(function () {

	angular
	.module("App")
	.config(function($routeProvider){
		$routeProvider
		.when("/welcome", {
			template: "<welcome></welcome>"
		})
		.when("/taskform", {
			template: "<task-form></task-form>"
		})
		.otherwise({redirectTo: "/welcome"});
	});

})();