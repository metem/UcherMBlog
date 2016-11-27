(function() {

    "use-strict";

    angular.module("app-blog", ["ngRoute", 'ngAnimate'])
        .config(function($routeProvider) {
            $routeProvider.when("/",
            {
                controller: "categoriesController",
                controllerAs: "vm",
                templateUrl: "/views/categoriesView.html"
            });

            $routeProvider.when("/:categoryName",
            {
                controller: "articlesController",
                controllerAs: "vm",
                templateUrl: "/views/articlesView.html"
            });

            $routeProvider.otherwise({ redirectTo: "/" });

        })
        .filter("toValidUrl",
            function() {
                return function(input) {
                    return input.replace(/ /g, "-").replace(/#/g, "_sharp").replace(/[+]/g, "_plus");
                }
            });
})();