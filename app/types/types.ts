export interface CardSection {
    icon: string;
    title: string;
    body?: string;
    tags?: string;
}

export type LanguageCode = "en" | "bg";

export interface LanguageCodes {
    name: "English" | "Bulgarian";
    code: LanguageCode;
}

export interface NavItems {
    label: string;
    to: string;
    icon: string;
}
