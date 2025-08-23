import React from 'react';
import { Button, TextArea, TextField } from '@radix-ui/themes';

const NewTicketPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Enter a title' />
      <TextArea placeholder='Enter a description' />
      <Button> Submit Ticket</Button>
    </div>
  );
};

export default NewTicketPage;
