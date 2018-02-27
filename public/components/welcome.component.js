(function() {
    var welcome = {
        template: `<div id="welcome">
        <h3>Welcome to TODO</h3>
        <p>Do more. Increase your productivity with a simple to do app.</p>
        <a href="#!/taskform">Enter <i class="material-icons">arrow_forward</i></a>
    </div>`,
        controller: function() {
            var $ctrl = this;
        }
    }










    angular.module("App").component("welcome", welcome);


})();