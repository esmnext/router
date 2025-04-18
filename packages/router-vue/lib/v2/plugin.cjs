'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.RouterVuePlugin = void 0;
var _link = require('./link.cjs');
var _view = require('./view.cjs');
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) =>
    key in obj
        ? __defProp(obj, key, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
          })
        : (obj[key] = value);
var __publicField = (obj, key, value) =>
    __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value);
class RouterVuePlugin {
    static install(Vue) {
        if (this.installed && this._Vue === Vue) return;
        this.installed = true;
        this._Vue = Vue;
        const eventMap = /* @__PURE__ */ new WeakMap();
        Vue.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    this._routerRoot = this;
                    this._routerRoot._router = this.$options.router;
                    Vue.util.defineReactive(this, '_route', {
                        value: this._router.route,
                        count: 0
                    });
                    const _event = () => {
                        this._route.count++;
                    };
                    eventMap.set(this, _event);
                    this.$options.router.afterEach(_event);
                } else {
                    this.$parent &&
                        (this._routerRoot = this.$parent._routerRoot);
                }
            },
            beforeDestroy() {
                const _event = eventMap.get(this);
                if (_event) {
                    this.$router.unBindAfterEach(_event);
                }
            }
        });
        Vue.component('router-view', _view.RouterView);
        Vue.component('router-link', _link.RouterLink);
        Object.defineProperty(Vue.prototype, '$router', {
            get() {
                return this._routerRoot._router;
            }
        });
        Object.defineProperty(Vue.prototype, '$route', {
            get() {
                this._routerRoot._route.count;
                return this._routerRoot._route.value;
            }
        });
    }
}
exports.RouterVuePlugin = RouterVuePlugin;
__publicField(RouterVuePlugin, 'installed');
__publicField(RouterVuePlugin, '_Vue');
