<script setup lang="ts">
import { useToast } from "primevue/usetoast";

const data = inject<Ref<any>>("sanityData");
const toast = useToast();
const { t } = useTranslations();

const contactData = computed(() => [
    {
        label: t("contact.email"),
        icon: "envelope",
        value: data?.value?.contactEmail,
        href: `mailto:${data?.value?.contactEmail}`,
    },
    {
        label: t("contact.location"),
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
        const body = new URLSearchParams({
            "form-name": "contact",
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
        });

        await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body,
        });

        toast.add({
            severity: "success",
            summary: t("contact.success"),
            detail: t("contact.successMessage"),
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
            summary: t("contact.error"),
            detail: t("contact.errorMessage"),
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
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                class="space-y-6"
                                @submit.prevent="onSubmit"
                            >
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />
                                <input type="hidden" name="bot-field" />

                                <div
                                    class="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    <div class="flex flex-col gap-2">
                                        <label for="name" class="font-medium">
                                            {{ t("contact.name") }}
                                        </label>
                                        <InputText
                                            id="name"
                                            name="name"
                                            v-model="form.name"
                                            :placeholder="
                                                t('contact.namePlaceholder')
                                            "
                                            class="w-full"
                                            required
                                        />
                                    </div>

                                    <div class="flex flex-col gap-2">
                                        <label for="email" class="font-medium">
                                            {{ t("contact.email") }}
                                        </label>
                                        <InputText
                                            id="email"
                                            name="email"
                                            v-model="form.email"
                                            type="email"
                                            :placeholder="
                                                t('contact.emailPlaceholder')
                                            "
                                            class="w-full"
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="subject" class="font-medium">
                                        {{ t("contact.subject") }}
                                    </label>
                                    <InputText
                                        id="subject"
                                        name="subject"
                                        v-model="form.subject"
                                        :placeholder="
                                            t('contact.subjectPlaceholder')
                                        "
                                        class="w-full"
                                        required
                                    />
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="message" class="font-medium">
                                        {{ t("contact.message") }}
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        v-model="form.message"
                                        :placeholder="
                                            t('contact.messagePlaceholder')
                                        "
                                        rows="5"
                                        class="w-full"
                                        required
                                    />
                                </div>

                                <div class="flex justify-end">
                                    <Button
                                        type="submit"
                                        :label="t('contact.sendMessage')"
                                        :title="t('contact.sendMessage')"
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
