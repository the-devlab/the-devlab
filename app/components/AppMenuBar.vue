<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";

const navItems = ref([
    {
        label: "Intro",
        to: "#intro",
        icon: "pi pi-user",
    },
    {
        label: "My Tool Kit",
        to: "#mytoolkit",
        icon: "pi pi-wrench",
    },
    {
        label: "Testimonials",
        to: "#testimonials",
        icon: "pi pi-comment",
    },
    {
        label: "Contact",
        to: "#contact",
        icon: "pi pi-envelope",
    },
]);
</script>

<template>
    <Menubar :model="navItems" class="justify-between">
        <template #start>
            <img
                src="@/assets/images/the-devlab-logo.png"
                alt="the-devlab logo"
                class="h-6 w-auto px-2"
            />
            <h2 class="text-2xl">the-devlab</h2>
        </template>

        <template #item="{ item, props }">
            <a
                :href="item.to"
                :aria-label="`Navigate to ${item.label} section`"
                :title="`${item.label}`"
                v-bind="props.action"
            >
                <span :class="item.icon" class="mr-1" aria-hidden="true" />
                <span>{{ item.label }}</span>
            </a>
        </template>
    </Menubar>
</template>
