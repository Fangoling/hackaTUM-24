import { X } from 'lucide-react'
import { Preference } from '../types/preferences'

interface SelectedPreferencesProps {
  selectedPreferences: Preference[]
  onRemove: (id: string) => void
}

export function SelectedPreferences({ selectedPreferences, onRemove }: SelectedPreferencesProps) {
  if (selectedPreferences.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {selectedPreferences.map((pref) => (
        <div
          key={pref.id}
          className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm"
        >
          {pref.name}
          <button
            onClick={() => onRemove(pref.id)}
            className="p-0.5 hover:bg-gray-300 rounded-full"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  )
}

