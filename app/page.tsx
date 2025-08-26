import Link from 'next/link';
import { Button, Table } from '@radix-ui/themes';
import { prisma } from './lib/prisma';
import TicketBadge from './components/ticketBadge';
import delay from 'delay';
import TicketAction from './tickets/ticketAction';

export default async function Home() {
  const tickets = await prisma.ticket.findMany();
  await delay(2000);
  return (
    <div className=''>
      {/* <TicketAction /> */}
      <h2> Dashboard page</h2>
    </div>
  );
}
