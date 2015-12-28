'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function routingConfig($futureStateProvider) {
    $futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', 'futureState', function ($q, $ocLazyLoad, futureState) {
        return System.import(futureState.src).then(function (loadedModule) {
            if (futureState.prefetch) {
                futureState.prefetch.forEach(function (path) {
                    return System.import(path);
                });
            }

            return $ocLazyLoad.inject(loadedModule.name || loadedModule.default.name || loadedModule);
        })
        // this needs to be done so that the future state handler doesn't use the component name as state name
        .then(function () {
            return null;
        }).catch(console.error.bind(console));
    }]);
}

exports.default = ['$futureStateProvider', routingConfig];
//# sourceMappingURL=routing-configuration.js.map
