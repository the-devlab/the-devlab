<script setup lang="ts">
import { useNavItems } from '@/data/navigation';
import { languages } from '@/data/languages';

const appConfig = useAppConfig();
const { t } = useTranslations();
const { navItems } = useNavItems();
const { language } = useLanguage();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="px-6 py-4">
      <div class="max-w-6xl mx-auto">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"
        >
          <div class="flex items-center gap-3">
            <img
              :src="appConfig.site.logo"
              :alt="`${appConfig.site.name} ${t('misc.logo')}`"
              class="h-6 w-auto"
            />
            <span class="text-gray-600 text-sm">
              © {{ currentYear }} {{ appConfig.site.name }}
            </span>
          </div>

          <nav class="flex gap-4 md:gap-6">
            <a
              v-for="link in navItems"
              :key="link.label"
              :href="link.to"
              :title="link.label"
              class="text-gray-600 hover:text-cyan-800 transition-colors text-sm"
            >
              {{ link.label }}
            </a>
          </nav>

          <Select
            v-model="language"
            :options="languages"
            optionLabel="name"
            optionValue="code"
            size="small"
          />

          <AppSocials />
        </div>
      </div>
    </div>
  </footer>
</template>
