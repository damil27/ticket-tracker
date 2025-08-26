import { Button } from '@radix-ui/themes/components/button';
import Link from 'next/link';
import React from 'react';

const TicketAction = () => {
  return (
    <div className='mb-4 '>
      <Button>
        {' '}
        <Link href='/tickets/new'> New Ticket</Link>
      </Button>
    </div>
  );
};

export default TicketAction;
