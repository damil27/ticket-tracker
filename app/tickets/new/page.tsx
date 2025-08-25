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
import ErrorMessage from '@/app/components/errorMessage';
import Spinner from '@/app/components/spinner';

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
