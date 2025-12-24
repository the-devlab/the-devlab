import { translations } from "@/locales";
import type { LanguageCode } from "@/types/types";

export const useTranslations = () => {
    const { language } = useLanguage();

    const t = (
        key: string,
        params?: Record<string, string | number>
    ): string => {
        const lang = language.value as LanguageCode;
        const keys = key.split(".");

        let value: any = translations[lang];
        for (const k of keys) {
            value = value?.[k];
        }

        // Fallback to English, then to key
        if (value === undefined) {
            value = translations["en"];
            for (const k of keys) {
                value = value?.[k];
            }
        }

        let result = value ?? key;

        // Handle interpolation: replace {param} with values
        if (params && typeof result === "string") {
            for (const [param, val] of Object.entries(params)) {
                result = result.replace(
                    new RegExp(`\\{${param}\\}`, "g"),
                    String(val)
                );
            }
        }

        return result;
    };

    return { t };
};
