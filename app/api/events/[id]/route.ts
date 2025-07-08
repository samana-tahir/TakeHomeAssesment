import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const event = await prisma.event.findUnique({ where: { id: params.id } })
  return NextResponse.json(event)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json()
  const event = await prisma.event.update({ where: { id: params.id }, data })
  return NextResponse.json(event)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.event.delete({ where: { id: params.id } })
  return NextResponse.json({ success: true })
}
