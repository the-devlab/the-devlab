<script setup lang="ts">
const data = inject<Ref<any>>("sanityData");
</script>

<template>
    <div id="toolkit" class="py-16 px-6">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4 text-gray-700">
                {{ data?.toolkitHeading }}
            </h2>

            <p class="text-center text-gray-600 max-w-5xl mx-auto mb-12">
                {{ data?.toolkitContext }}
            </p>

            <div class="flex flex-wrap justify-center gap-6">
                <AppCard :data="data?.stack">
                    <template #body="{ card }">
                        <div class="flex flex-wrap justify-center gap-2">
                            <span
                                v-for="tag in card.tags"
                                :key="tag"
                                class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                            >
                                {{ tag }}
                            </span>
                        </div>
                    </template>
                </AppCard>
            </div>
        </div>
    </div>
</template>
