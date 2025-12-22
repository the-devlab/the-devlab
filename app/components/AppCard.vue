<script setup lang="ts">
import type { CardSection } from "@/types/types";

defineProps<{
    data: CardSection[];
}>();
</script>

<template>
    <Card
        v-for="card in data"
        :key="card.title"
        class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] text-center"
    >
        <template #content>
            <div class="flex flex-col items-center gap-4">
                <div
                    class="w-14 h-14 bg-cyan-800/10 rounded-full flex items-center justify-center"
                >
                    <i :class="`pi pi-${card.icon}`" class="text-cyan-800"></i>
                </div>
                <h3 class="font-semibold text-gray-700">
                    {{ card.title }}
                </h3>

                <slot name="body" :card="card" />
            </div>
        </template>
    </Card>
</template>
