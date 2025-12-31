import type { LanguageCode } from '@/types/types';

export const useLanguage = () => {
  const language = useState<LanguageCode>('language', () => 'en');

  onMounted(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem('language');
    if (stored) {
      language.value = stored as LanguageCode;
    }

    // Watch for changes and save to localStorage
    watch(language, newValue => {
      localStorage.setItem('language', newValue);
    });
  });

  return { language };
};
