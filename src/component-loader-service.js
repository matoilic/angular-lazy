class ComponentLoaderService {
    constructor($q, $ocLazyLoad, $injector, system) {
        this._$q = $q;
        this._$ocLazyLoad = $ocLazyLoad;
        this._$injector = $injector;
        this._system = system;
    }

    loadComponent(componentName) {
        if(!this._$ocLazyLoad.isLoaded(componentName)) {
            return this._system.import('components/' + componentName + '/index').then(loadedComponent => {
                const componentName = loadedComponent.name || loadedComponent.default.name || loadedComponent;
                
                return this._$ocLazyLoad.inject(componentName);
            });
        }

        return this._$q.when(moduleName);
    }

    resolve(componentName, serviceName) {
        return this
            .loadComponent(componentName)
            .then(() => this._$injector.get(serviceName));
    }
}

export default [
    '$q',
    '$ocLazyLoad',
    '$injector',
    'system',
    ComponentLoaderService
];
