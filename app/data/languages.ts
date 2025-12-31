import type { LanguageCodes } from '@/types/types';

export const languages = ref<LanguageCodes[]>([
  { name: 'English', code: 'en' },
  { name: 'Bulgarian', code: 'bg' }
]);
