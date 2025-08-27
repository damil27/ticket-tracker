import React from 'react';
import { Button, Table } from '@radix-ui/themes';
import TicketAction from './ticketAction';
import { prisma } from '../lib/prisma';
import delay from 'delay';
import TicketBadge from '../components/ticketBadge';
import CustomLink from '../components/link';

const TicketsPage = async () => {
  const tickets = await prisma.ticket.findMany();
  await delay(2000);
  return (
    <div className=''>
      <TicketAction />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            {/* <Table.RowHeaderCell>ID</Table.RowHeaderCell> */}
            <Table.RowHeaderCell>Title</Table.RowHeaderCell>
            <Table.RowHeaderCell className='hidden md:table-cell'>
              Status
            </Table.RowHeaderCell>
            <Table.RowHeaderCell className='hidden md:table-cell'>
              Create At
            </Table.RowHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tickets.map((ticket) => (
            <Table.Row key={ticket.id}>
              {/* <Table.Cell>{ticket.id}</Table.Cell> */}
              <Table.Cell>
                <CustomLink href={`/tickets/${ticket.id}`}>
                  {ticket.title}
                </CustomLink>
                <div className='md:hidden text-sm text-zinc-500'>
                  <TicketBadge status={ticket.status} />
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <TicketBadge status={ticket.status} />
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                {ticket.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default TicketsPage;
