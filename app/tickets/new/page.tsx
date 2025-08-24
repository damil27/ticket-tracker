'use client';
import { Button, TextField } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import SimpleMDE, { SimpleMdeReact } from 'react-simplemde-editor';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

interface TicketForm {
  title: string;
  description: string;
}
const NewTicketPage = () => {
  const router = useRouter();

  const { register, handleSubmit, control } = useForm<TicketForm>();
  const simpleMdeOptions = useMemo(
    () => ({
      spellChecker: true,
      autofocus: false,
      placeholder: 'Enter a description',
      status: false,
      //   toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "preview"],
      forceSync: true,
      //   hideIcons: ["side-by-side", "fullscreen"],
    }),
    []
  );

  return (
    <form
      className='max-w-xl space-y-3'
      onSubmit={handleSubmit(async (data) => {
        const res = await axios.post('/api/tickets', data);
        router.push('/tickets');
      })}
    >
      <TextField.Root placeholder='Enter a title' {...register('title')} />
      <Controller
        name='description'
        control={control}
        render={({ field }) => (
          <SimpleMdeReact {...field} options={simpleMdeOptions} />
        )}
      />
      <Button> Submit Ticket</Button>
    </form>
  );
};

export default NewTicketPage;
