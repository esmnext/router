import type { RouterRawLocation } from '@gez/router';
import type { PropType } from 'vue';
export interface RouterLinkProps {
    /**
     * 前往的路由路径
     */
    to: RouterRawLocation;
    /**
     * 节点使用的标签名
     * @default 'a'
     */
    tag: string;
    /**
     * 调用 router.replace 以替换 router.push。
     * @default false
     */
    replace: boolean;
    /**
     * 路径激活匹配规则
     * @example include => 路径包含即激活.
     * 如: 当前路由为/en/news/list  此时router-link 的路径为 /en/news 也会激活
     * @example route => 路由匹配才会激活,需要匹配的路由树一致.
     * 如: 当前路由为/en/news/list/123  此时router-link 的路径为 /en/news/list 也会激活
     * @example exact => 路径全匹配才会激活，不仅需要匹配路由树一致，还需要参数匹配才会激活.
     * 如: 当前路由为/en/news/list/123  此时router-link 的路径为 /en/news/list/123 才会激活，如果配置的路径为/en/news/list/123456 也不会激活
     * @default 'include'
     */
    exact: 'include' | 'route' | 'exact';
    /**
     * 是否为相对路径
     * 按照 Hanson 要求目前都是绝对路径，因此废弃此属性
     * @default false
     */
    /**
     * 路由激活时的class
     * @default 'router-link-active'
     */
    activeClass: string;
    /**
     * 哪些事件触发路由跳转
     * @default 'click'
     */
    event: string | string[];
}
export declare const RouterLink: import('vue/types').DefineComponent<
    {
        to: {
            type: PropType<RouterRawLocation>;
            required: true;
        };
        tag: {
            type: PropType<string>;
            default: string;
        };
        replace: {
            type: PropType<boolean>;
            default: boolean;
        };
        exact: {
            type: PropType<'include' | 'route' | 'exact'>;
            default: string;
        };
        activeClass: {
            type: PropType<string>;
            default: string;
        };
        event: {
            type: PropType<string | string[]>;
            default: string;
        };
    },
    {},
    {},
    import('vue/types').ComponentComputedOptions,
    import('vue/types').ComponentMethodOptions,
    import('vue/types').ComponentOptionsMixin,
    import('vue/types').ComponentOptionsMixin,
    {},
    string,
    Readonly<
        import('vue/types').ExtractPropTypes<{
            to: {
                type: PropType<RouterRawLocation>;
                required: true;
            };
            tag: {
                type: PropType<string>;
                default: string;
            };
            replace: {
                type: PropType<boolean>;
                default: boolean;
            };
            exact: {
                type: PropType<'include' | 'route' | 'exact'>;
                default: string;
            };
            activeClass: {
                type: PropType<string>;
                default: string;
            };
            event: {
                type: PropType<string | string[]>;
                default: string;
            };
        }>
    >,
    {
        exact: 'include' | 'route' | 'exact';
        tag: string;
        replace: boolean;
        activeClass: string;
        event: string | string[];
    }
>;
