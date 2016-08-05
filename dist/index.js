"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function mock() {
    var instance = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var options = arguments.length <= 1 || arguments[1] === undefined ? defaultOptions : arguments[1];

    return new Proxy(instance, new DefaultProxyHandler(options));
}
exports.mock = mock;
var defaultOptions = {
    defaultValue: function defaultValue() {
        return void 0;
    }
};

var DefaultProxyHandler = function () {
    function DefaultProxyHandler(options) {
        _classCallCheck(this, DefaultProxyHandler);

        this.options = options;
    }

    _createClass(DefaultProxyHandler, [{
        key: "get",
        value: function get(target, property, recevier) {
            return property in target ? target[property] : this.options.defaultValue;
        }
    }]);

    return DefaultProxyHandler;
}();