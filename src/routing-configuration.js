function routingConfig($futureStateProvider) {
    $futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', 'futureState', function ($q, $ocLazyLoad, futureState) {
        return System
            .import(futureState.src)
            .then(loadedModule => {
                if (futureState.prefetch) {
                    futureState.prefetch.forEach(path => System.import(path));
                }

                return $ocLazyLoad.inject(loadedModule.name || loadedModule.default.name || loadedModule);
            })
            // this needs to be done so that the future state handler doesn't use the component name as state name
            .then(() => null)
            .catch(console.error.bind(console));
    }]);
}

export default [
    '$futureStateProvider',
    routingConfig
];
