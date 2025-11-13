import { createClient } from "@sanity/client";

export const sanity = createClient({
    projectId: "o9tmumau",
    dataset: "production",
    apiVersion: "2025-11-09",
    useCdn: false,
});
