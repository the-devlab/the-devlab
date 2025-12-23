import type { LanguageCode } from "@/types/types";

export const useLanguage = () => {
    const language = useState<LanguageCode>("language", () => "en");

    return { language };
};
