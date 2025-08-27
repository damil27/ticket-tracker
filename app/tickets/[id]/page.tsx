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
      <Heading>Ticket: {ticket?.title}</Heading>
      <Flex gap='2' align='center' className='mb-4'>
        <Text>
          <TicketBadge status={ticket?.status!} />{' '}
        </Text>
        <Text> {ticket?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='prose'>
        <Text size='2' weight='bold' className='mb-2'>
          Ticket Description:
        </Text>
        <ReactMarkdown>
          {ticket?.description || 'No description provided'}
        </ReactMarkdown>
      </Card>
    </div>
  );
};

export default TecketDetailsPage;
