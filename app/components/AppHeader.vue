<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const isOpen = ref(false);

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: "About",
        to: "#about",
        icon: "i-lucide-square-user-round",
    },
    {
        label: "Software",
        to: "#info",
        icon: "i-lucide-monitor-cog",
    },
    {
        label: "Testimonials",
        to: "#testimonials",
        icon: "i-lucide-message-square-code",
    },
    {
        label: "Contact",
        to: "#contact",
        icon: "i-lucide-mail",
    },
]);
</script>

<template>
    <div class="flex items-center">
        <img
            src="@/assets/images/the-devlab-logo.png"
            alt="the-devlab logo"
            class="h-6 w-auto px-2"
        />
        <h2 class="text-2xl font-semibold">the-devlab</h2>
    </div>

    <UNavigationMenu :items="items" />

    <!-- <UNavigationMenu
        orientation="vertical"
        :items="items"
        class="data-[orientation=vertical]:w-48"
    /> -->
</template>
