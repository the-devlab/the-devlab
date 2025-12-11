<script setup lang="ts">
const data = inject<Ref<any>>("sanityData");
</script>

<template>
    <div id="contact" class="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">
            {{ data?.contactHeading }}
        </h2>

        <div class="flex-shrink-0">
            <img
                src="@/assets/images/coder.png"
                alt="intro section avatar"
                class="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
            />
        </div>
        <!-- <form
            :schema="schema"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
        >
            <UFormField label="Email" name="email">
                <UInput v-model="state.email" />
            </UFormField>

            <UFormField label="Password" name="password">
                <UInput v-model="state.password" type="password" />
            </UFormField>

            <Button type="submit"> Submit </Button>
        </form> -->
    </div>
</template>
