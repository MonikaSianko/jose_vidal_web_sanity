import * as React from 'react'
import { StringInputProps, set, unset } from 'sanity'
import { Card, Stack, Text, Select, Flex, Box } from '@sanity/ui'

import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  MapPinIcon,
  GraduationCapIcon,
  InstagramLogoIcon,
  XLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
  GlobeIcon,
  PlayIcon,
} from '@phosphor-icons/react/dist/ssr'

type IconName =
  | 'ArrowRightIcon'
  | 'ArrowUpRightIcon'
  | 'EnvelopeSimpleIcon'
  | 'PhoneIcon'
  | 'MapPinIcon'
  | 'GraduationCapIcon'
  | 'InstagramLogoIcon'
  | 'XLogoIcon'
  | 'LinkedinLogoIcon'
  | 'YoutubeLogoIcon'
  | 'GlobeIcon'
  | 'PlayIcon'

const ICONS: Record<IconName, React.ComponentType<{ size?: number }>> = {
  ArrowRightIcon,
  ArrowUpRightIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  MapPinIcon,
  GraduationCapIcon,
  InstagramLogoIcon,
  XLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
  GlobeIcon,
  PlayIcon,
}

export const ICON_OPTIONS: { title: string; value: IconName }[] = [
  { title: 'Arrow Right', value: 'ArrowRightIcon' },
  { title: 'Arrow Up Right', value: 'ArrowUpRightIcon' },
  { title: 'Envelope', value: 'EnvelopeSimpleIcon' },
  { title: 'Phone', value: 'PhoneIcon' },
  { title: 'Map Pin', value: 'MapPinIcon' },
  { title: 'Graduation Cap', value: 'GraduationCapIcon' },
  { title: 'Instagram', value: 'InstagramLogoIcon' },
  { title: 'X / Twitter', value: 'XLogoIcon' },
  { title: 'LinkedIn', value: 'LinkedinLogoIcon' },
  { title: 'YouTube', value: 'YoutubeLogoIcon' },
  { title: 'Globe', value: 'GlobeIcon' },
  { title: 'Play', value: 'PlayIcon' },
]

export function IconNameInput(props: StringInputProps) {
  const { value, onChange, elementProps } = props

  const iconName = (value as IconName | undefined) ?? undefined
  const IconComp = iconName ? ICONS[iconName] : null

  return (
    <Stack space={3}>
      {/* Dropdown */}
      <Select
        {...elementProps}
        value={iconName ?? ''}
        onChange={(e) => {
          const v = e.currentTarget.value
          onChange(v ? set(v) : unset())
        }}
      >
        <option value="">Select an icon…</option>
        {ICON_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.title}
          </option>
        ))}
      </Select>

      {/* Preview */}
      <Card padding={3} radius={2} border tone="transparent">
        <Flex align="center" gap={3}>
          <Box>
            {IconComp ? (
              <IconComp size={28} />
            ) : (
              <Text muted>No icon selected</Text>
            )}
          </Box>
          <Stack space={2}>
            <Text size={1} weight="semibold">
              Preview
            </Text>
            <Text size={1} muted>
              {iconName ?? '—'}
            </Text>
          </Stack>
        </Flex>
      </Card>
    </Stack>
  )
}
