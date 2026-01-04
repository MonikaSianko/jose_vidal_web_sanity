export const languages = [
  { id: 'en', title: 'English' },
  { id: 'es', title: 'Español' },
] as const

export type LanguageId = (typeof languages)[number]['id']
