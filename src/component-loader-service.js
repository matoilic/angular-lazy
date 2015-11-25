/**
 * Provides functionality to load components at runtime.
 */
class ComponentLoaderService {
    /**
     *
     * @param $q
     * @param $ocLazyLoad
     * @param $injector
     * @param system
     */
    constructor($q, $ocLazyLoad, $injector, system) {
        this._$q = $q;
        this._$ocLazyLoad = $ocLazyLoad;
        this._$injector = $injector;
        this._system = system;
    }

    /**
     * Loads a component with the given name. It will automatically look for the component in the components folder.
     * E.g. if you pass `popup` it will try to load the component from "components/popup/index".
     *
     * @param {String} componentName
     * @returns {Promise}
     */
    loadComponent(componentName) {
        if(!this._$ocLazyLoad.isLoaded(componentName)) {
            return this._system.import('components/' + componentName + '/index').then(loadedComponent => {
                const componentName = loadedComponent.name || loadedComponent.default.name || loadedComponent;
                
                return this._$ocLazyLoad.inject(componentName);
            });
        }

        return this._$q.when(moduleName);
    }

    /**
     * Resolves an Angular injectable, e.g. service or constant, from the given component. If ensures that the component
     * is loaded before trying to resolve the injectable.
     *
     * @param {String} componentName
     * @param {String} identifier
     * @returns {Promise}
     */
    resolve(componentName, identifier) {
        return this
            .loadComponent(componentName)
            .then(() => this._$injector.get(identifier));
    }
}

export default [
    '$q',
    '$ocLazyLoad',
    '$injector',
    'system',
    ComponentLoaderService
];
