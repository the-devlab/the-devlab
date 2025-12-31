<script setup lang="ts">
import Menubar from 'primevue/menubar';
import { useNavItems } from '@/data/navigation';

const appConfig = useAppConfig();
const { t } = useTranslations();
const { navItems } = useNavItems();
</script>

<template>
  <Menubar :model="navItems" class="justify-between bg-transparent!">
    <template #start>
      <a href="/" :title="`${appConfig.site.name} ${t('misc.logo')}`">
        <img
          :src="appConfig.site.logo"
          :alt="`${appConfig.site.name} ${t('misc.logo')}`"
          class="h-6 w-auto px-2"
      /></a>
      <h2 class="text-2xl">{{ appConfig.site.name }}</h2>
    </template>

    <template #item="{ item, props }">
      <a
        :href="item.to"
        :aria-label="t('navigation.label', { item: item.label as string })"
        :title="`${item.label}`"
        v-bind="props.action"
      >
        <span :class="item.icon" class="mr-1" aria-hidden="true" />
        <span>{{ item.label }}</span>
      </a>
    </template>
  </Menubar>
</template>
