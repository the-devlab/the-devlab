<script setup lang="ts">
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";

const isOpen = ref(false);

const items2 = computed(() => [
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

import { ref } from "vue";

const items = ref([
    {
        label: "Home",
        icon: "pi pi-home",
    },
    {
        label: "Features",
        icon: "pi pi-star",
    },
    {
        label: "Projects",
        icon: "pi pi-search",
        items: [
            {
                label: "Components",
                icon: "pi pi-bolt",
            },
            {
                label: "Blocks",
                icon: "pi pi-server",
            },
            {
                label: "UI Kit",
                icon: "pi pi-pencil",
            },
            {
                label: "Templates",
                icon: "pi pi-palette",
                items: [
                    {
                        label: "Apollo",
                        icon: "pi pi-palette",
                    },
                    {
                        label: "Ultima",
                        icon: "pi pi-palette",
                    },
                ],
            },
        ],
    },
    {
        label: "Contact",
        icon: "pi pi-envelope",
    },
]);
</script>

<template>
    <header>
        <div class="flex items-center">
            <img
                src="@/assets/images/the-devlab-logo.png"
                alt="the-devlab logo"
                class="h-6 w-auto px-2"
            />
            <h2 class="text-2xl font-semibold">the-devlab</h2>
        </div>

        <Menu :model="items2" />

        <div class="card">
            <Menubar :model="items" />
        </div>

        <!-- <UNavigationMenu :items="items" /> -->

        <!-- <UNavigationMenu
        orientation="vertical"
        :items="items"
        class="data-[orientation=vertical]:w-48"
    /> -->
    </header>
</template>
