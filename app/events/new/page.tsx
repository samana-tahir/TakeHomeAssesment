'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewEvent() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '', description: '', datetime: '',
    location: '', capacity: '', price_per_person: ''
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, capacity: +form.capacity, price_per_person: +form.price_per_person })
    })
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {Object.keys(form).map(key => (
         <input
         key={key}
         type={key === 'datetime' ? 'datetime-local' : 'text'}
         value={form[key as keyof typeof form]}
         onChange={(e) => setForm({ ...form, [key]: e.target.value })}
         placeholder={key}
         required
         className="block border p-2 mb-4 w-full"
       />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2">Create Event</button>
    </form>
  )
}
