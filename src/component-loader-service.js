/**
 * Provides functionality to lazily load components at runtime.
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
     * Loads an Angular component and makes sure it is bootstrapped properly.
     *
     * @param {Promise} importer A promise that resolves to a Angular module. This will usually be the return value of
     * an `import()` call. We do not call `import` in `loadComponent` itself because most module bundlers cannot handle
     * dynamic imports and are not able to split code properly if we use `import` in here.
     * @param {string} name Optional. If the Angular module to import is not exported as default, you can pass the name
     * under which to find the module.
     * @returns {Promise}
     */
    loadComponent(importer, name) {
        return importer.then((loadedComponent) => {
            let componentName;

            if (name) {
                if (!loadedComponent[name]) {
                    throw new Error(`No exported module found under "${name}", did you misspell it?`);
                }

                componentName = loadedComponent[name].name || loadedComponent[name];
            } else if (loadedComponent.default) {
                componentName = loadedComponent.default.name || loadedComponent.default;
            } else {
                componentName = loadedComponent.name || loadedComponent;
            }

            return this._$ocLazyLoad.inject(componentName);
        });
    }

    /**
     * Resolves an Angular injectable, e.g. service or constant, from the given component. If ensures that the component
     * is loaded before trying to resolve the injectable.
     *
     * @param {Promise} importer A promise that resolves to a Angular module. This will usually be the return value of
     * an `import()` call. We do not call `import` in `loadComponent` itself because most module bundlers cannot handle
     * dynamic imports and are not able to split code properly if we use `import` in here.
     * @param {String} identifier The identifier of the injectable which should be resolved from the imported Angular
     * module.
     * @param {string} exportName Optional. If the Angular module to import is not exported as default, you can pass
     * the name under which to find the module.
     * @returns {Promise}
     */
    resolve(importer, identifier, exportName) {
        return this
            .loadComponent(importer, exportName)
            .then(() => this._$injector.get(identifier));
    }
}

export default [
    '$ocLazyLoad',
    '$injector',
    ComponentLoaderService
];
