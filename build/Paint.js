(function(){

    angular.module('Paint', []);

})(window);;(function () {

    function Paint_Shape(params) {
        _.extend(this, params)
    }

    _.extend(Paint_Shape.prototype, {
    });

    var Paint = angular.module('Paint');

    Paint.factory('Paint_Shape', function (Color_Palette, Things) {

    });

}) (window);
;(function () {

    var app = angular.module('Paint');

    app.directive('paintEditor', function InjectingFunction() {
        //@TODO: inject template root.
        return {
            templateUrl: '/js/paint/directives/editor.html',
            compile: function CompilingFunction($templateElement, $templateAttributes) {

                return function LinkingFunction($scope, $linkElement, $linkAttributes){

                };
            }
        };
    });

})(window);