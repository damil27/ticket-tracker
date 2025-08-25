'use client';
import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import SimpleMDE, { SimpleMdeReact } from 'react-simplemde-editor';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateTicketsSchema } from '@/app/CreateTicketsSchema';
import { z } from 'zod';

type TicketForm = z.infer<typeof CreateTicketsSchema>;

const NewTicketPage = () => {
  const [error, setError] = useState<string | null>('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TicketForm>({
    resolver: zodResolver(CreateTicketsSchema),
  });
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
    <div className='mb-4 max-w-xl'>
      {error && (
        <Callout.Root>
          <Callout.Text color='red'>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className='max-w-xl space-y-3'
        onSubmit={handleSubmit(async (data) => {
          try {
            const res = await axios.post('/api/tickets', data);
            router.push('/tickets');
          } catch (error) {
            // console.log(error);
            setError('Something went wrong, please try again later');
          }
        })}
      >
        <TextField.Root placeholder='Enter a title' {...register('title')} />
        {errors.title && (
          <Text className='text-red-500 text-sm'>{errors.title.message}</Text>
        )}
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <SimpleMdeReact {...field} options={simpleMdeOptions} />
          )}
        />
        {errors.description && (
          <Text className='text-red-500 text-sm' as='p'>
            {errors.description.message}
          </Text>
        )}
        <Button> Submit Ticket</Button>
      </form>
    </div>
  );
};

export default NewTicketPage;
