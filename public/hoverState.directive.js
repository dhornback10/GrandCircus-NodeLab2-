(function() {
    function hoverState() {
        return {
            link: function($scope, $element, $attrs) {
                $element.on("mouseover", function() {
                    $element.css("color", "blue");
                });
                $element.on("mouseout", function(){
                	$element.css("color", "black");
                });
            }
        };
    }


    angular
        .module("App")
        .directive("hoverState", hoverState)


})();