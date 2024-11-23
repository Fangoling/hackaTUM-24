export interface Preference {
  id: string
  name: string
  icon: string
  selected?: boolean
}

export interface PreferenceProps {
  preference: Preference
  onSelect: (id: string) => void
  isSelected: boolean
}

