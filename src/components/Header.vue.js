import { ref, computed } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { Menu, X } from "lucide-vue-next";
import { useAppStore } from "../store";
const router = useRouter();
const store = useAppStore();
const isMenuOpen = ref(false);
const isLoggedIn = computed(() => !!store.user);
const handleLogout = () => {
    store.logout();
    isMenuOpen.value = false;
    router.push("/");
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
    ...{ class: "w-full bg-white shadow-sm sticky top-0 z-50" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/",
    ...{ class: "text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition" },
}));
const __VLS_2 = __VLS_1({
    to: "/",
    ...{ class: "text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
    ...{ class: "hidden md:flex items-center gap-6" },
});
if (__VLS_ctx.isLoggedIn) {
    // @ts-ignore
    [isLoggedIn,];
    const __VLS_5 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        to: "/dashboard",
        ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
    }));
    const __VLS_7 = __VLS_6({
        to: "/dashboard",
        ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const { default: __VLS_9 } = __VLS_8.slots;
    var __VLS_8;
    const __VLS_10 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
        to: "/tickets",
        ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
    }));
    const __VLS_12 = __VLS_11({
        to: "/tickets",
        ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    const { default: __VLS_14 } = __VLS_13.slots;
    var __VLS_13;
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (__VLS_ctx.handleLogout) },
        ...{ class: "bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium" },
    });
    // @ts-ignore
    [handleLogout,];
}
else {
    const __VLS_15 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
        to: "/auth/login",
        ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
    }));
    const __VLS_17 = __VLS_16({
        to: "/auth/login",
        ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    const { default: __VLS_19 } = __VLS_18.slots;
    var __VLS_18;
    const __VLS_20 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        to: "/auth/signup",
        ...{ class: "bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium" },
    }));
    const __VLS_22 = __VLS_21({
        to: "/auth/signup",
        ...{ class: "bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const { default: __VLS_24 } = __VLS_23.slots;
    var __VLS_23;
}
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.isMenuOpen = !__VLS_ctx.isMenuOpen;
            // @ts-ignore
            [isMenuOpen, isMenuOpen,];
        } },
    ...{ class: "md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1" },
    'aria-label': "Toggle menu",
});
const __VLS_25 = ((__VLS_ctx.isMenuOpen ? __VLS_ctx.X : __VLS_ctx.Menu));
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    size: "26",
}));
const __VLS_27 = __VLS_26({
    size: "26",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[isMenuOpen, X, Menu,];
const __VLS_30 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    name: "fade",
}));
const __VLS_32 = __VLS_31({
    name: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_34 } = __VLS_33.slots;
if (__VLS_ctx.isMenuOpen) {
    // @ts-ignore
    [isMenuOpen,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "md:hidden bg-white shadow-inner border-t border-gray-100" },
    });
    __VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
        ...{ class: "flex flex-col items-center gap-4 py-4" },
    });
    if (__VLS_ctx.isLoggedIn) {
        // @ts-ignore
        [isLoggedIn,];
        const __VLS_35 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
        // @ts-ignore
        RouterLink;
        // @ts-ignore
        const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
            ...{ 'onClick': {} },
            to: "/dashboard",
            ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
        }));
        const __VLS_37 = __VLS_36({
            ...{ 'onClick': {} },
            to: "/dashboard",
            ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        let __VLS_39;
        let __VLS_40;
        const __VLS_41 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(__VLS_ctx.isMenuOpen))
                        return;
                    if (!(__VLS_ctx.isLoggedIn))
                        return;
                    __VLS_ctx.isMenuOpen = false;
                    // @ts-ignore
                    [isMenuOpen,];
                } });
        const { default: __VLS_42 } = __VLS_38.slots;
        var __VLS_38;
        const __VLS_43 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
        // @ts-ignore
        RouterLink;
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({
            ...{ 'onClick': {} },
            to: "/tickets",
            ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
        }));
        const __VLS_45 = __VLS_44({
            ...{ 'onClick': {} },
            to: "/tickets",
            ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_44));
        let __VLS_47;
        let __VLS_48;
        const __VLS_49 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(__VLS_ctx.isMenuOpen))
                        return;
                    if (!(__VLS_ctx.isLoggedIn))
                        return;
                    __VLS_ctx.isMenuOpen = false;
                    // @ts-ignore
                    [isMenuOpen,];
                } });
        const { default: __VLS_50 } = __VLS_46.slots;
        var __VLS_46;
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (__VLS_ctx.handleLogout) },
            ...{ class: "bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium" },
        });
        // @ts-ignore
        [handleLogout,];
    }
    else {
        const __VLS_51 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
        // @ts-ignore
        RouterLink;
        // @ts-ignore
        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
            ...{ 'onClick': {} },
            to: "/auth/login",
            ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
        }));
        const __VLS_53 = __VLS_52({
            ...{ 'onClick': {} },
            to: "/auth/login",
            ...{ class: "text-gray-700 hover:text-indigo-600 transition font-medium" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_52));
        let __VLS_55;
        let __VLS_56;
        const __VLS_57 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(__VLS_ctx.isMenuOpen))
                        return;
                    if (!!(__VLS_ctx.isLoggedIn))
                        return;
                    __VLS_ctx.isMenuOpen = false;
                    // @ts-ignore
                    [isMenuOpen,];
                } });
        const { default: __VLS_58 } = __VLS_54.slots;
        var __VLS_54;
        const __VLS_59 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
        // @ts-ignore
        RouterLink;
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
            ...{ 'onClick': {} },
            to: "/auth/signup",
            ...{ class: "bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium" },
        }));
        const __VLS_61 = __VLS_60({
            ...{ 'onClick': {} },
            to: "/auth/signup",
            ...{ class: "bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_60));
        let __VLS_63;
        let __VLS_64;
        const __VLS_65 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(__VLS_ctx.isMenuOpen))
                        return;
                    if (!!(__VLS_ctx.isLoggedIn))
                        return;
                    __VLS_ctx.isMenuOpen = false;
                    // @ts-ignore
                    [isMenuOpen,];
                } });
        const { default: __VLS_66 } = __VLS_62.slots;
        var __VLS_62;
    }
}
var __VLS_33;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[1440px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-indigo-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-indigo-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-indigo-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-indigo-500']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-indigo-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-indigo-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
