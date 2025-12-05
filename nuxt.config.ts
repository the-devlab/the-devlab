import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    runtimeConfig: {
        sanityToken: process.env.SANITY_API_TOKEN || "",
        public: {
            sanityProjectId:
                process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || "o9tmumau",
            sanityDataset:
                process.env.NUXT_PUBLIC_SANITY_DATASET || "production",
            sanityApiVersion:
                process.env.NUXT_PUBLIC_SANITY_API_VERSION || "2025-11-09",
        },
    },
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
    modules: ["@primevue/nuxt-module"],
    primevue: {
        options: {
            theme: {
                preset: Aura,
            },
        },
    },
    css: ["~/assets/css/main.css"],
    vue: {
        propsDestructure: true,
    },
});
