import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const titleParam = searchParams.get('title')
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  const title = titleParam && titleParam.trim() !== '' ? titleParam : undefined

  const events = await prisma.event.findMany({
    where: {
      AND: [
        title ? { title: { contains: title } } : {},
        from ? { datetime: { gte: new Date(from) } } : {},
        to ? { datetime: { lte: new Date(to) } } : {}
      ]
    },
    orderBy: { datetime: 'asc' }
  })

  return NextResponse.json(events)
}

export async function POST(request: Request) {
  const data = await request.json()

  // Convert string values to correct types
  const event = await prisma.event.create({
    data: {
      title: data.title,
      description: data.description,
      datetime: new Date(data.datetime), // Convert to Date
      location: data.location,
      capacity: parseInt(data.capacity), // Convert to number
      price_per_person: parseFloat(data.price_per_person), // Convert to number
    }
  })

  return NextResponse.json(event)
}
