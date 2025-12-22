<script setup lang="ts">
import Menubar from "primevue/menubar";
import { navItems } from "@/data/navigation";
</script>

<template>
    <Menubar :model="navItems" class="justify-between !bg-transparent">
        <template #start>
            <a href="/" title="the-devlab">
                <img
                    src="@/assets/images/the-devlab-logo.png"
                    alt="the-devlab logo"
                    class="h-6 w-auto px-2"
            /></a>
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
