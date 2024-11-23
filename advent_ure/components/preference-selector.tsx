'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { Preference } from '../types/preferences'
import { preferences } from '../data/preferences'
import { PreferenceCard } from '../components/preference-card'
import { SelectedPreferences } from '../components/selected-preferences'
import { useRouter } from 'next/navigation'

export default function PreferenceSelector() {
  const [selectedPreferences, setSelectedPreferences] = useState<Preference[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const filteredPreferences = preferences.filter((pref) =>
    pref.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelect = (id: string) => {
    const preference = preferences.find((p) => p.id === id)
    if (!preference) return

    setSelectedPreferences((prev) => {
      const isAlreadySelected = prev.some((p) => p.id === id)
      if (isAlreadySelected) {
        return prev.filter((p) => p.id !== id)
      }
      return [...prev, preference]
    })
  }

  const handleRemove = (id: string) => {
    setSelectedPreferences((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-500 mb-6">
        Select at least 2 preferences
      </h1>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search preferences..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <SelectedPreferences
        selectedPreferences={selectedPreferences}
        onRemove={handleRemove}
      />

      <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[calc(100vh-300px)]">
        {filteredPreferences.map((preference) => (
          <PreferenceCard
            key={preference.id}
            preference={preference}
            onSelect={handleSelect}
            isSelected={selectedPreferences.some((p) => p.id === preference.id)}
          />
        ))}
      </div>
      {selectedPreferences.length >= 2 && (
  <button
    onClick={() => router.push('/match')}
    className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-full text-xl font-semibold transition-colors"
    aria-label="Start matching with your selected preferences"
  >
    let's match
  </button>
)}
    </div>
  )
}

