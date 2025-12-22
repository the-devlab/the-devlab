<script setup lang="ts">
const data = inject<Ref<any>>("sanityData");
</script>

<template>
    <div id="about" class="py-16 px-6 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4 text-gray-700">
                {{ data?.aboutHeading }}
            </h2>

            <p class="text-center text-gray-600 max-w-5xl mx-auto mb-12">
                {{ data?.aboutContext }}
            </p>

            <div class="flex flex-wrap justify-center gap-6">
                <AppCard :data="data?.aboutHighlights">
                    <template #body="{ card }">
                        <p class="text-sm text-gray-500">
                            {{ card.body }}
                        </p>
                    </template>
                </AppCard>
            </div>
        </div>
    </div>
</template>
