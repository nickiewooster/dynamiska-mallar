(function() {
    'use strict';

    angular.module('newConsultantAccount')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var state = [{
            stateName: 'bestallning.ny.konsult.nytt-konto',
            stateConfig: {
                url: '/nytt-konto',
                views: {
                    'wizardContent@bestallning': {
                        templateUrl: 'components/consultantNewAccount/template.html',
                        title: gettext('New consultant account'),
                        controller: 'NewConsultantAccountController'
                    }
                }
            }
        }];

        routeHelper.registerStates(state);
    }
})();