import angular from 'angular';
import 'angular-ui-router';
import 'ui-router-extras';
import ComponentLoaderService from './component-loader-service';
import routingConfig from './routing-configuration';

const dependencies = [
    'ui.router',
    'ct.ui.router.extras',
    'ct.ui.router.extras.future'
];

export default angular
    .module('angular-lazy', dependencies)
    .service('componentLoader', ComponentLoaderService)
    .config(routingConfig);
