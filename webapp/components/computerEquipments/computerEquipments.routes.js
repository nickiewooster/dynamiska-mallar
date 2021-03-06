(function() {
    'use strict';

    angular.module('newConsultantAccount')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var state = [{
            stateName: 'bestallning.ny.datorutrustning',
            stateConfig: {
                url: '/datorutrustning',
                modelKey: 'ny.datorutrustning',
                views: {
                    'wizardContent@bestallning': {
                        template: '<formly-form model="model.ny.datorutrustning" fields="fields"></formly-form>',
                        title: gettext('Datorutrustning'),
                        controller: 'ComputerEquipmentsController'
                    }
                }
            }
        }, {
            stateName: 'bestallning.nuvarande.datorutrustning',
            stateConfig: {
                url: '/datorutrustning',
                modelKey: 'nuvarande.datorutrustning',
                views: {
                    'wizardContent@bestallning': {
                        template: '<formly-form model="model.nuvarande.datorutrustning" fields="fields"></formly-form>',
                        title: gettext('Datorutrustning'),
                        controller: 'ComputerEquipmentsController'
                    }
                }
            }
        }];

        routeHelper.registerStates(state);
    }
})();