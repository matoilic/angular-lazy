function routingConfig($futureStateProvider) {
    $futureStateProvider.stateFactory('load', [
        '$q',
        '$ocLazyLoad',
        'futureState',
        ($q, $ocLazyLoad, futureState) => futureState
            .load()
            .then(loadedModule => $ocLazyLoad.inject(loadedModule.name || loadedModule.default.name || loadedModule))
            .then(() => {
                if (futureState.prefetch) {
                    futureState.prefetch();
                }
            })
            .catch(console.error.bind(console)) // eslint-disable-line no-console
    ]);

    $futureStateProvider.stateFactory('given', ['$q', ($q) => $q.resolve()]);
}

export default [
    '$futureStateProvider',
    routingConfig
];
