'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

require('angular-ui-router');

require('ui-router-extras');

var _componentLoaderService = require('./component-loader-service');

var _componentLoaderService2 = _interopRequireDefault(_componentLoaderService);

var _systemService = require('./system-service');

var _systemService2 = _interopRequireDefault(_systemService);

var _routingConfiguration = require('./routing-configuration');

var _routingConfiguration2 = _interopRequireDefault(_routingConfiguration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dependencies = ['ui.router', 'ct.ui.router.extras', 'ct.ui.router.extras.future'];

exports.default = _angular2.default.module('angular-lazy', dependencies).service('componentLoader', _componentLoaderService2.default).service('system', _systemService2.default).config(_routingConfiguration2.default);
//# sourceMappingURL=angular-lazy.js.map
