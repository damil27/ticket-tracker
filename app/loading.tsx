import { Table } from '@radix-ui/themes';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import TicketAction from './tickets/ticketAction';

const TicketLoadingPage = () => {
  const tickets = [1, 2, 3, 4, 5];
  return (
    <div>
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
            <Table.Row key={ticket}>
              {/* <Table.Cell>{ticket.id}</Table.Cell> */}
              <Table.Cell>
                <Skeleton />
                <div className='md:hidden text-sm text-zinc-500'>
                  <Skeleton />
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <Skeleton />
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default TicketLoadingPage;
