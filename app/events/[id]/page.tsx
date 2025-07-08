import { prisma } from '@/lib/prisma'

export default async function EventDetail({ params }: { params: { id: string } }) {
  const event = await prisma.event.findUnique({ where: { id: params.id } })
  if (!event) return <div className="p-4">Event not found</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <p>{new Date(event.datetime).toLocaleString()}</p>
      <p>Location: {event.location}</p>
      <p>Capacity: {event.capacity}</p>
      <p>Price: ${event.price_per_person}</p>
    </div>
  )
}
