<script setup lang="ts">
const { data: sanityData } = await useSanityData();

provide("sanityData", sanityData);

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
    <NuxtRouteAnnouncer />
    <AppHeader />
    <AppHero />
    <AppJourney />
    <AppToolkit />
    <AppTestimonials />
    <AppContact />
    <AppFooter />
</template>

<style lang="scss">
html {
    scroll-behavior: smooth;
}
</style>
