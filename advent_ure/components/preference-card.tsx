import Image from 'next/image'
import { PreferenceProps } from '../types/preferences'

export function PreferenceCard({ preference, onSelect, isSelected }: PreferenceProps) {
  return (
    <button
      onClick={() => onSelect(preference.id)}
      className={`relative rounded-2xl overflow-hidden transition-all ${
        isSelected ? 'ring-2 ring-green-500' : ''
      }`}
    >
      <Image
        src={preference.icon}
        alt={preference.name}
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </button>
  )
}

