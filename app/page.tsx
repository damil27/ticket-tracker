import Link from 'next/link';
import { Button, Table } from '@radix-ui/themes';
import { prisma } from './lib/prisma';

export default async function Home() {
  const tickets = await prisma.ticket.findMany();
  return (
    <div className=''>
      <div>
        <Button>
          {' '}
          <Link href='/tickets/new'> New Ticket</Link>
        </Button>
      </div>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.RowHeaderCell>ID</Table.RowHeaderCell>
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
              <Table.Cell>{ticket.id}</Table.Cell>
              <Table.Cell>
                {ticket.title}
                <div className='md:hidden text-sm text-zinc-500'>
                  {ticket.status}
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                {ticket.status}
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
}
