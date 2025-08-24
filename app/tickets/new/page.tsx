'use client';
import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const NewTicketPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Enter a title' />
      <SimpleMDE placeholder='Enter a description' />
      <Button> Submit Ticket</Button>
    </div>
  );
};

export default NewTicketPage;
