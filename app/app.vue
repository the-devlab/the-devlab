<script setup lang="ts">
useSeoMeta({
    title: "the-devlab - Welcome to the the-devlab",
    description: "Your site description here.",

    // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
    ogTitle: "the-devlab",
    ogDescription: "Your site description here.",
    ogImage: "https://yoursite.com/og-image.png",
    ogUrl: "https://the-devlab.com",

    twitterCard: "summary_large_image",
});

useHead({
    htmlAttrs: { lang: "en" },
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<template>
    <UApp>
        <NuxtRouteAnnouncer />
        <AppHeader />
        <!-- <UMain> -->
        <AppHero />
        <!-- <AppAbout /> -->
        <!-- <AppInfo /> -->
        <!-- <AppTestimonials /> -->
        <!-- <AppContactForm /> -->
        <!-- </UMain> -->
        <AppFooter />
    </UApp>
</template>

<style lang="scss">
html {
    scroll-behavior: smooth;
}
</style>
