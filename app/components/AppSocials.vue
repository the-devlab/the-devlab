<script setup lang="ts">
const socialLinks = [
    {
        icon: "pi pi-github",
        href: "https://github.com/the-devlab",
        label: "GitHub",
    },
    {
        icon: "pi pi-linkedin",
        href: "https://www.linkedin.com/in/ghatzi/",
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
