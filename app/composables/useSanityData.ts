import { createSanityClient } from "@/utils/sanity";
import { mainQuery } from "@/utils/queries/main";

export const useSanityData = async () => {
    const { data, error } = await useAsyncData(
        "sanity-main",
        () => {
            const config = useRuntimeConfig();
            const sanity = createSanityClient(config);
            return sanity.fetch(mainQuery);
        },
        { server: true }
    );

    if (error.value) {
        console.error("Error fetching Sanity data:", error.value);
    }

    return { data, error };
};
