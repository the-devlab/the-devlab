import { createSanityClient } from '@/utils/sanity';
import { mainQuery } from '@/utils/queries/main';
import type { Ref } from 'vue';

export const useSanityData = async (lang: Ref<string> | string) => {
  const langValue = isRef(lang) ? lang : ref(lang);

  const { data, error, refresh } = await useAsyncData(
    `sanity-main-${langValue.value}`,
    () => {
      const config = useRuntimeConfig();
      const sanity = createSanityClient(config);
      return sanity.fetch(mainQuery(langValue.value));
    },
    {
      server: true,
      watch: [langValue]
    }
  );

  if (error.value) {
    console.error('Error fetching Sanity data:', error.value);
  }

  return { data, error, refresh };
};
