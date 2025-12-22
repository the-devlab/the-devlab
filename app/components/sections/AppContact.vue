<script setup lang="ts">
import { useToast } from "primevue/usetoast";

const data = inject<Ref<any>>("sanityData");
const toast = useToast();

const contactData = computed(() => [
    {
        label: "Email",
        icon: "envelope",
        value: data?.value?.contactEmail,
        href: `mailto:${data?.value?.contactEmail}`,
    },
    {
        label: "Location",
        icon: "map-marker",
        value: data?.value?.contactLocation,
    },
]);

const form = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const isSubmitting = ref(false);

const onSubmit = async () => {
    isSubmitting.value = true;

    try {
        toast.add({
            severity: "success",
            summary: "Success",
            detail: "Your message has been sent!",
            life: 3000,
        });

        // Reset form
        form.name = "";
        form.email = "";
        form.subject = "";
        form.message = "";
    } catch (error) {
        toast.add({
            severity: "error",
            summary: "Error",
            detail: "Failed to send message. Please try again.",
            life: 3000,
        });
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <ClientOnly>
        <Toast />
    </ClientOnly>
    <div id="contact" class="py-16 px-6">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4 text-gray-700">
                {{ data?.contactHeading }}
            </h2>

            <p class="text-center text-gray-600 max-w-5xl mx-auto mb-12">
                {{ data?.contactContext }}
            </p>

            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch"
            >
                <ClientOnly>
                    <Card>
                        <template #content>
                            <div class="flex flex-col items-center gap-8">
                                <div class="space-y-4 w-full">
                                    <div
                                        v-for="item in contactData"
                                        :key="item.label"
                                        class="flex items-center gap-4 p-4 rounded-lg bg-gray-50"
                                    >
                                        <div
                                            class="w-12 h-12 bg-cyan-800/10 rounded-full flex items-center justify-center flex-shrink-0"
                                        >
                                            <i
                                                class="text-cyan-800 text-xl"
                                                :class="`pi pi-${item.icon}`"
                                            ></i>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-500">
                                                {{ item.label }}
                                            </p>
                                            <a
                                                v-if="item.href"
                                                :href="item.href"
                                                class="text-gray-700 hover:text-cyan-800 transition-colors font-medium"
                                            >
                                                {{ item.value }}
                                            </a>
                                            <p
                                                v-else
                                                class="text-gray-700 font-medium"
                                            >
                                                {{ item.value }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Card>
                </ClientOnly>

                <ClientOnly>
                    <Card>
                        <template #content>
                            <form class="space-y-6" @submit.prevent="onSubmit">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="flex flex-col gap-2">
                                        <label for="name" class="font-medium"
                                            >Name</label
                                        >
                                        <InputText
                                            id="name"
                                            v-model="form.name"
                                            placeholder="Your name"
                                            class="w-full"
                                            required
                                        />
                                    </div>

                                    <div class="flex flex-col gap-2">
                                        <label for="email" class="font-medium"
                                            >Email</label
                                        >
                                        <InputText
                                            id="email"
                                            v-model="form.email"
                                            type="email"
                                            placeholder="your@email.com"
                                            class="w-full"
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="subject" class="font-medium"
                                        >Subject</label
                                    >
                                    <InputText
                                        id="subject"
                                        v-model="form.subject"
                                        placeholder="Subject of your message"
                                        class="w-full"
                                        required
                                    />
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="message" class="font-medium"
                                        >Message</label
                                    >
                                    <Textarea
                                        id="message"
                                        v-model="form.message"
                                        placeholder="Your message..."
                                        rows="5"
                                        class="w-full"
                                        required
                                    />
                                </div>

                                <div class="flex justify-end">
                                    <Button
                                        type="submit"
                                        label="Send Message"
                                        icon="pi pi-send"
                                        :loading="isSubmitting"
                                    />
                                </div>
                            </form>
                        </template>
                    </Card>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>
