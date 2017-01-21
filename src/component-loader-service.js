/**
 * Provides functionality to load components at runtime.
 */
class ComponentLoaderService {
    /**
     *
     * @param $ocLazyLoad
     * @param $injector
     */
    constructor($ocLazyLoad, $injector) {
        this._$ocLazyLoad = $ocLazyLoad;
        this._$injector = $injector;
    }

    /**
     * Loads a component with the given name. It will automatically look for the component in the components folder.
     * E.g. if you pass `popup` it will try to load the component from "components/popup/index".
     *
     * @param {Promise} importFn
     * @returns {Promise}
     */
    loadComponent(importFn) {
        return importFn.then(loadedComponent => {
            const componentName = loadedComponent.name || loadedComponent.default.name || loadedComponent;

            if (!this._$ocLazyLoad.isLoaded(componentName)) {
                return this._$ocLazyLoad.inject(componentName);
            }

            return null;
        });
    }

    /**
     * Resolves an Angular injectable, e.g. service or constant, from the given component. If ensures that the component
     * is loaded before trying to resolve the injectable.
     *
     * @param {Promise} importFn
     * @param {String} identifier
     * @returns {Promise}
     */
    resolve(importFn, identifier) {
        return this
            .loadComponent(importFn)
            .then(() => this._$injector.get(identifier));
    }
}

export default [
    '$ocLazyLoad',
    '$injector',
    ComponentLoaderService
];
