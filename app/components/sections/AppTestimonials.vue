<script setup lang="ts">
const data = inject<Ref<any>>("sanityData");
</script>

<template>
    <div id="testimonials" class="py-16 px-6 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">
                {{ data?.testimonialsHeading }}
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    v-for="testimonial in data?.testimonials"
                    :key="testimonial.name"
                    class="flex items-start gap-4"
                >
                    <div class="flex-shrink-0">
                        <img
                            :src="testimonial.avatar"
                            :alt="testimonial.name"
                            class="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                        />
                    </div>

                    <div
                        class="relative bg-white rounded-2xl shadow-lg p-5 flex-1"
                    >
                        <div
                            class="absolute top-6 -left-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"
                        ></div>
                        <p class="text-gray-700 italic mb-3">
                            "{{ testimonial.quote }}"
                        </p>
                        <p class="font-semibold text-gray-800">
                            {{ testimonial.name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
