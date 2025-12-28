<script setup lang="ts">
const data = inject<Ref<any>>("sanityData");
</script>

<template>
    <div
        id="hero"
        class="relative min-h-[70vh] flex items-center justify-center py-16"
    >
        <div
            class="absolute inset-0 bg-cover bg-center"
            :style="{
                backgroundImage: `url(${data?.heroImage})`,
            }"
        ></div>

        <div class="absolute inset-0 bg-cyan-800/80"></div>

        <div class="relative text-center text-white px-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold">
                {{ data?.heroHeading }}
            </h1>
            <p
                class="text-xl leading-relaxed mb-6 opacity-90 max-w-5xl mx-auto"
                v-html="data?.heroContext"
            />

            <Button
                v-if="data?.heroButton"
                as="a"
                :href="data?.heroButton.link"
                :label="data?.heroButton.label"
                :title="data?.heroButton.label"
                :icon="`pi pi-${data?.heroButton.icon}`"
            />
        </div>
    </div>
</template>
