import type { TitledListValue } from 'sanity'

export const HOME_SECTION_IDS = [
  'home',
  'about',
  'testimonials',
  'author',
  'courses',
  'cta',
  'contact',
] as const

export type HomeSectionId = (typeof HOME_SECTION_IDS)[number]

export const HOME_SECTIONS_LIST: TitledListValue<string>[] = [
  { title: 'home', value: 'home' },
  { title: 'about', value: 'about' },
  { title: 'testimonials', value: 'testimonials' },
  { title: 'author', value: 'author' },
  { title: 'courses', value: 'courses' },
  { title: 'cta', value: 'cta' },
  { title: 'contact', value: 'contact' },
]
