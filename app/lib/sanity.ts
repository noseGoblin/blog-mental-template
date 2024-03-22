import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'v700z5ue',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
});
