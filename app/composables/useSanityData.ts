import { createSanityClient } from "@/utils/sanity";
import { mainQuery } from "@/utils/queries/main";

export const useSanityData = async () => {
    const config = useRuntimeConfig();
    const sanity = createSanityClient(config);

    const { data, error } = await useAsyncData("sanity-main", () =>
        sanity.fetch(mainQuery)
    );

    if (error.value) {
        console.error("Error fetching Sanity data:", error.value);
    }

    return { data, error };
};
