<script setup lang="ts">
onMounted(() => {
    document.documentElement.classList.add("hydrated");
});

const { language } = useLanguage();
const { data: sanityData } = await useSanityData(language);

provide("sanityData", sanityData);
provide("language", language);

const appConfig = useAppConfig();

useSeoMeta({
    title: sanityData.value.seoTitle,
    description: sanityData.value.seoDescription,

    // Open Graph (LinkedIn, WhatsApp, Slack, Discord, etc.)
    ogTitle: sanityData.value.seoTitle,
    ogDescription: sanityData.value.seoDescription,
    ogImage: `${appConfig.site.url}/og-image.png`,
    ogUrl: appConfig.site.url,
    ogType: "website",

    twitterCard: "summary_large_image",
    twitterTitle: sanityData.value.seoTitle,
    twitterDescription: sanityData.value.seoDescription,
});
</script>

<template>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <AppHero />
    <AppAbout />
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
