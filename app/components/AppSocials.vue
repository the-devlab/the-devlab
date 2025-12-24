<script setup lang="ts">
const appConfig = useAppConfig();

const socialLinks = [
    {
        icon: "pi pi-github",
        href: appConfig.site.github,
        label: "GitHub",
    },
    {
        icon: "pi pi-linkedin",
        href: appConfig.site.linkedIn,
        label: "LinkedIn",
    },
];
</script>

<template>
    <div class="flex gap-3">
        <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="w-8 h-8 bg-gray-200 hover:bg-cyan-800 hover:text-white rounded-full flex items-center justify-center transition-all text-gray-600"
        >
            <i :class="social.icon"></i>
        </a>
    </div>
</template>
