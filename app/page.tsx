'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [events, setEvents] = useState([])
  const [title, setTitle] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  useEffect(() => {
    const query = new URLSearchParams()
    if (title) query.append('title', title)
    if (from) query.append('from', from)
    if (to) query.append('to', to)

    fetch(`/api/events?${query.toString()}`)
      .then(res => res.json())
      .then(setEvents)
  }, [title, from, to])

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <a href="/events/new" className="inline-block mb-4 text-blue-600 underline">
        + Create New Event
      </a>

      {/* Search Fields */}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Search by title"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="date"
        value={from}
        onChange={e => setFrom(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="date"
        value={to}
        onChange={e => setTo(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      {events.length > 0 ? (
        events.map((e: any) => (
          <div key={e.id} className="border p-4 mb-4">
            <h2 className="text-xl font-bold">{e.title}</h2>
            <p>{e.description}</p>
            <p>{new Date(e.datetime).toLocaleString()}</p>
            <a href={`/events/${e.id}`} className="text-blue-600">View Details</a>
          </div>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </main>
  )
}

