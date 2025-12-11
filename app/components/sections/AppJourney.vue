<script setup lang="ts">
const data = inject<Ref<any>>("sanityData");
</script>

<template>
    <div id="intro" class="py-16 px-6 lg:px-12 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">
                {{ data?.journeyHeading }}
            </h2>

            <p>{{ data?.journeyContext }}</p>
        </div>
    </div>
</template>
