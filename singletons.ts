export const singletonTypes = ['homePage'] as const

export type SingletonType = (typeof singletonTypes)[number]

export const isSingletonType = (
  schemaType: string | undefined,
): schemaType is SingletonType => {
  return (
    !!schemaType && (singletonTypes as readonly string[]).includes(schemaType)
  )
}

export const singletonActions = new Set([
  'publish',
  'discardChanges',
  'restore',
])
