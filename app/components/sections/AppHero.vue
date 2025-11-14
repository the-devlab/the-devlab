<script setup lang="ts">
import { createSanityClient } from "@/utils/sanity";
import { mainQuery } from "@/utils/queries/homePage";

const config = useRuntimeConfig();
const sanity = createSanityClient(config);

const { data, error } = await useAsyncData("homepage", () =>
    sanity.fetch(mainQuery)
);

if (error.value) {
    console.error("Error fetching Sanity data:", error.value);
}
</script>

<template>
    <UContainer
        id="hero"
        class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700"
    >
        <div class="container mx-auto px-6 py-20 text-center text-white">
            <h2 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                {{ data?.title }}
            </h2>
            <p
                class="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90"
            >
                {{ data?.content }}
            </p>
        </div>
    </UContainer>
</template>
