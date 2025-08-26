import { prisma } from '@/app/lib/prisma';
import React from 'react';

const TecketDetailsPage = async ({ params }: { params: { id: string } }) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  return (
    <div>
      <h2>Ticket ID: {ticket?.id}</h2>
      <p>Ticket title {ticket?.title}</p>
      <p>Ticket Description : {ticket?.description}</p>
      <p>Ticket Status : {ticket?.status}</p>
      <p>Ticket Created At : {ticket?.createdAt.toDateString()}</p>
    </div>
  );
};

export default TecketDetailsPage;
