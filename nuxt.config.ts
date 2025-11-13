export default defineNuxtConfig({
    alias: {
        "@app": "~/app",
        "@assets": "~/assets",
        "@components": "~/components",
        "@composables": "~/composables",
        "@utils": "~/utils",
    },
    app: {
        head: {
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "96x96",
                    href: "/favicon-96x96.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
        },
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    compatibilityDate: "2025-07-15",
    devtools: {
        enabled: true,
    },
    modules: ["@nuxt/ui"],
    css: ["~/assets/css/main.css"],
    vue: {
        propsDestructure: true,
    },
});
