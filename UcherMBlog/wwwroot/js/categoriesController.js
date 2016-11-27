(function () {

    "use-strict";

    angular.module("app-blog")
        .controller("categoriesController", categoriesController);

    function categoriesController($http) {
        var vm = this;

        vm.categories = [];
        vm.errorMessage = "";
        vm.isBusy = true;

        $http.get("/api/categories")
            .then(function (response) {
                angular.copy(response.data, vm.categories);
            },
                function (error) {
                    vm.errorMessage = "Data load error: " + error;
                })
            .finally(function () {
                vm.isBusy = false;
            });
    }
})();