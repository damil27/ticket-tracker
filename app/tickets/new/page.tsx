'use client';
import { Button, Callout, TextField } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage, Spinner } from '@/app/components';
import { CreateTicketsSchema } from '@/app/CreateTicketsSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { z } from 'zod';


 const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), {
   ssr: false,
   loading: () => <p>Loading ...</p>,
 });

type TicketForm = z.infer<typeof CreateTicketsSchema>;

const NewTicketPage = () => {
  const [error, setError] = useState<string | null>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      forceSync: true,
    }),
    []
  );

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      const res = await axios.post('/api/tickets', data);
      router.push('/tickets');
    } catch (error) {
      setIsSubmitting(false);
      setError('Something went wrong, please try again later');
    }
  });

  return (
    <div className='mb-4 max-w-xl'>
      {error && (
        <Callout.Root>
          <Callout.Text color='red'>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className='max-w-xl space-y-3' onSubmit={onSubmit}>
        <TextField.Root placeholder='Enter a title' {...register('title')} />

        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <SimpleMdeReact {...field} options={simpleMdeOptions} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          {' '}
          Submit Ticket {isSubmitting && <Spinner />}{' '}
        </Button>
      </form>
    </div>
  );
};

export default NewTicketPage;
