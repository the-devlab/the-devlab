import { createClient } from '@sanity/client';

export const createSanityClient = config => {
  return createClient({
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDataset,
    apiVersion: config.public.sanityApiVersion,
    token: config.sanityToken || undefined,
    useCdn: !config.sanityToken,
    perspective: 'published'
  });
};
