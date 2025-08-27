import TicketBadge from '@/app/components/ticketBadge';
import { prisma } from '@/app/lib/prisma';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const TecketDetailsPage = async ({ params }: { params: { id: string } }) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  return (
    <div>
      <Heading>Ticket title: {ticket?.title}</Heading>
      <Flex gap='2' align='center' className='mb-4'>
        <TicketBadge status={ticket?.status!} />
        <Text>Ticket Created At : {ticket?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='prose'>
        <ReactMarkdown>{ticket?.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default TecketDetailsPage;
