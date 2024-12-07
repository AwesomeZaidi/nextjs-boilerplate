'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const SONGS = [
  { id: 1, title: 'Chasing Dreams', url: '/song1.mp3' },
  { id: 2, title: 'City Lights', url: '/song2.mp3' },
  { id: 3, title: 'Midnight Thoughts', url: '/song3.mp3' },
]

export default function SongList() {
  const [currentSong, setCurrentSong] = useState<string | null>(null)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Songs</h2>
      <ul className="space-y-4">
        {SONGS.map((song) => (
          <li key={song.id} className="flex items-center justify-between">
            <span>{song.title}</span>
            <Button
              onClick={() => setCurrentSong(currentSong === song.url ? null : song.url)}
            >
              {currentSong === song.url ? 'Pause' : 'Play'}
            </Button>
          </li>
        ))}
      </ul>
      {currentSong && (
        <audio src={currentSong} autoPlay controls className="mt-4 w-full" />
      )}
    </div>
  )
}

