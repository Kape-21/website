<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { TranslationsType } from "@/types/translations.type.ts";
import { shallowValidateTranslations } from "@/lib/translations/shallow-validate-translations.ts";
import { TranslationsKey, TranslationsSelectorContextKey } from "@/constants/application.ts";
import { inject } from "vue";
import type { TranslationsSelectorType } from "@/types/translations-selector.type.ts";

const setTranslations = inject<TranslationsSelectorType>(TranslationsSelectorContextKey);
const locale: string = navigator.language.slice(0, 2);

useQuery({
  "queryKey": ["translations", "background", locale],
  "queryFn" : async () => {
    const response = await fetch(`/translations/${locale}.json`);
    const data: unknown = await response.json();
    const validated: TranslationsType = shallowValidateTranslations(data);

    setTranslations?.(validated);
    localStorage.setItem(TranslationsKey, JSON.stringify(validated));
  },
});
</script>