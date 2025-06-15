
import React from "react";

export type Language = "en" | "ar";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export interface LanguageProviderProps {
  children: React.ReactNode;
}
