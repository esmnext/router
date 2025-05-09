'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.RouterView = void 0;
var _vue = require('vue');
const RouterView = (exports.RouterView = (0, _vue.defineComponent)({
    functional: true,
    render(h, ctx) {
        var _a;
        ctx.data.dataView = true;
        let { parent } = ctx;
        const { data } = ctx;
        const route = parent.$route;
        let depth = 0;
        while (parent && parent._routerRoot !== parent) {
            const vnodeData =
                ((_a = parent == null ? void 0 : parent.$vnode) == null
                    ? void 0
                    : _a.data) || {};
            if (vnodeData.dataView) {
                depth++;
            }
            parent.$parent && (parent = parent.$parent);
        }
        const matchRoute = route.matched[depth];
        if (!matchRoute) {
            return h();
        }
        return h(matchRoute.component || matchRoute.asyncComponent, data);
    }
}));
