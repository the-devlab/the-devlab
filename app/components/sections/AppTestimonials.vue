<script setup lang="ts">
const data = inject<Ref<any>>('sanityData');
</script>

<template>
  <div v-if="data.testimonials" id="testimonials" class="py-16 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-700">
        {{ data?.testimonialsHeading }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="testimonial in data?.testimonials"
          :key="testimonial.name"
          class="flex flex-col items-center md:flex-row md:items-start gap-4"
        >
          <div class="shrink-0">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          <div class="relative bg-white rounded-2xl shadow-lg p-5 flex-1">
            <!-- Speech bubble arrow - hidden on mobile, shown on md+ -->
            <div
              class="hidden md:block absolute top-6 -left-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"
            ></div>
            <!-- Speech bubble arrow - shown on mobile (points up), hidden on md+ -->
            <div
              class="md:hidden absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"
            ></div>
            <p class="italic text-gray-700 mb-3 text-center md:text-left">
              "{{ testimonial.quote }}"
            </p>
            <p class="font-semibold text-gray-800 text-center md:text-left">
              {{ testimonial.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
