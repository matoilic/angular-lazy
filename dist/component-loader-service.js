'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Provides functionality to load components at runtime.
 */

var ComponentLoaderService = (function () {
    /**
     *
     * @param $q
     * @param $ocLazyLoad
     * @param $injector
     * @param system
     */

    function ComponentLoaderService($q, $ocLazyLoad, $injector, system) {
        _classCallCheck(this, ComponentLoaderService);

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

    _createClass(ComponentLoaderService, [{
        key: 'loadComponent',
        value: function loadComponent(componentName) {
            var _this = this;

            if (!this._$ocLazyLoad.isLoaded(componentName)) {
                return this._system.import('components/' + componentName + '/index').then(function (loadedComponent) {
                    var componentName = loadedComponent.name || loadedComponent.default.name || loadedComponent;

                    return _this._$ocLazyLoad.inject(componentName);
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

    }, {
        key: 'resolve',
        value: function resolve(componentName, identifier) {
            var _this2 = this;

            return this.loadComponent(componentName).then(function () {
                return _this2._$injector.get(identifier);
            });
        }
    }]);

    return ComponentLoaderService;
})();

exports.default = ['$q', '$ocLazyLoad', '$injector', 'system', ComponentLoaderService];
//# sourceMappingURL=component-loader-service.js.map
