var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) =>
    key in obj
        ? __defProp(obj, key, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
          })
        : (obj[key] = value);
var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
import { isEqualRoute, isSameRoute } from '@gez/router';
import { defineComponent, h } from 'vue';
import { useRoute, useRouter } from './use.mjs';
export const RouterLink = defineComponent({
    props: {
        to: {
            type: [String, Object],
            required: true
        },
        tag: {
            type: String,
            default: 'a'
        },
        replace: {
            type: Boolean,
            default: false
        },
        exact: {
            type: String,
            default: 'include'
        },
        // append: {
        //     type: Boolean as PropType<boolean>,
        //     default: false
        // },
        activeClass: {
            type: String,
            default: 'router-link-active'
        },
        event: {
            type: String,
            default: 'click'
        }
    },
    render(props) {
        const { to, tag, replace, exact, activeClass, event } = props;
        const router = useRouter();
        const current = useRoute();
        const resolveRoute = router.resolve(to);
        let compare;
        switch (exact) {
            case 'route':
                compare = isSameRoute;
                break;
            case 'exact':
                compare = isEqualRoute;
                break;
            case 'include':
            default:
                compare = (current2, route) => {
                    return current2.fullPath.startsWith(route.fullPath);
                };
                break;
        }
        const active = compare(current, resolveRoute);
        const handler = (e) => {
            if (guardEvent(e)) {
                router[replace ? 'replace' : 'push'](to);
            }
        };
        const on = {};
        const eventTypeList = getEventTypeList(event);
        eventTypeList.forEach((eventName) => {
            on[`on${eventName.toLocaleLowerCase()}`] = handler;
        });
        return h(
            tag,
            __spreadValues(
                {
                    class: ['router-link', active ? [activeClass] : ''],
                    href: resolveRoute.fullPath
                },
                on
            ),
            this.$slots
        );
    }
});
function getEventTypeList(eventType) {
    if (eventType instanceof Array) {
        if (eventType.length > 0) {
            return eventType;
        }
        return ['click'];
    }
    return [eventType || 'click'];
}
function guardEvent(e) {
    var _a;
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;
    if (e.button !== void 0 && e.button !== 0) return;
    if ((_a = e.currentTarget) == null ? void 0 : _a.getAttribute) {
        const target = e.currentTarget.getAttribute('target');
        if (/\b_blank\b/i.test(target)) return;
    }
    if (e.preventDefault) e.preventDefault();
    return true;
}
