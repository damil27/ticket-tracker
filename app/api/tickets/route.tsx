import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';
import { z } from 'zod';

const CreateTicketsSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(255),
  description: z.string().min(1, 'Description is required'),
});
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = CreateTicketsSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues[0].message },
      { status: 400 }
    );
  }

  const newTicket = await prisma.ticket.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });
  return NextResponse.json(newTicket, { status: 201 });
}
