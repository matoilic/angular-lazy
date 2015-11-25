"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SystemService = (function () {
    function SystemService() {
        _classCallCheck(this, SystemService);
    }

    _createClass(SystemService, [{
        key: "import",
        value: function _import(path) {
            return System.import(path).catch(function (err) {
                console.error(err.stack);
            });
        }
    }]);

    return SystemService;
})();

exports.default = [SystemService];
//# sourceMappingURL=system-service.js.map
