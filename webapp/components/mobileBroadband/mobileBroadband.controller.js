(function() {
    'use strict';
    angular.module('mobileBroadband')
        .controller('NewMobileBroadbandController', mbCtrl);

    /*@ngInject*/
    function mbCtrl($scope, $state, forms) {
        if (!$scope.model.steps || !$scope.model.steps.existingEmployee && !$scope.model.steps.newEmployee) {
            $state.go('^');
        }

        // Make sure to only use one model for all states
        $state.current.skip = false;
        $scope.model = $scope.model || {};
        $scope.fields = forms.newMobileBroadband($scope.model);
    }
})();