(function () {

    "use-strict";

    angular.module("app-blog")
        .controller("articlesController", articlesController);

    function articlesController($routeParams, $http) {
        var vm = this;

        vm.category = $routeParams.categoryName;

        vm.articles = [];
        vm.errorMessage = "";
        vm.isBusy = true;

        $http.get("/api/articles?categoryName=" + vm.category)
            .then(function (response) {
                angular.copy(response.data, vm.articles);
            },
                function (error) {
                    vm.errorMessage = "Data load error: " + error;
                })
            .finally(function () {
                vm.isBusy = false;
            });
    }
})();