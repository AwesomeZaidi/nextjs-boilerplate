'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const SONGS = [
  { id: 1, title: 'forever, love', url: 'https://dl.sndup.net/xz39n/forever,%20love%20-%20birthday%20rap.m4a' },
  { id: 2, title: 'niklegah inshAllah', url: 'https://dl.sndup.net/p2s7c/Niklegah%20iA%20(recorded%20inna%20whip).m4a' },
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

