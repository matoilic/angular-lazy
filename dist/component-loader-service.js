'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentLoaderService = (function () {
    function ComponentLoaderService($q, $ocLazyLoad, $injector, system) {
        _classCallCheck(this, ComponentLoaderService);

        this._$q = $q;
        this._$ocLazyLoad = $ocLazyLoad;
        this._$injector = $injector;
        this._system = system;
    }

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
    }, {
        key: 'resolve',
        value: function resolve(componentName, serviceName) {
            var _this2 = this;

            return this.loadComponent(componentName).then(function () {
                return _this2._$injector.get(serviceName);
            });
        }
    }]);

    return ComponentLoaderService;
})();

exports.default = ['$q', '$ocLazyLoad', '$injector', 'system', ComponentLoaderService];
//# sourceMappingURL=component-loader-service.js.map
