<script setup lang="ts">
const data = inject<Ref<any>>("sanityData");
</script>

<template>
    <div id="mytoolkit" class="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">
            {{ data?.toolkitHeading }}
        </h2>
        <p>{{ data?.toolkitContext }}</p>
    </div>
</template>
