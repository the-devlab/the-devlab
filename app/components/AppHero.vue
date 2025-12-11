<script setup lang="ts">
const data = inject<Ref<any>>("sanityData");
</script>

<template>
    <div
        id="hero"
        class="relative min-h-[70vh] md:h-[70vh] flex items-center justify-center py-16 md:py-0"
    >
        <div
            class="absolute inset-0 bg-cover bg-center"
            :style="{
                backgroundImage: `url(${data?.heroImage})`,
            }"
        ></div>

        <div class="absolute inset-0 bg-cyan-800/80"></div>

        <div class="relative z-10 text-center text-white px-6 lg:px-12 max-w-7xl">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                {{ data?.heroHeading }}
            </h1>
            <p
                class="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 opacity-90"
                v-html="data?.heroContext"
            />
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                    as="a"
                    href="#contact"
                    label="Contact"
                    icon="pi pi-envelope"
                />
            </div>
        </div>
    </div>
</template>
