import TicketBadge from '@/app/components/ticketBadge';
import { Heading, Flex, Card, Text } from '@radix-ui/themes';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DetailsPageLoader = () => {
  return (
    <div>
      <Skeleton className='max-w-xl' />
      <Flex gap='2' align='center' className='mb-4'>
        <Skeleton width='4rem' />
        <Skeleton width='8rem' />
      </Flex>
      <Card className='prose'>
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default DetailsPageLoader;
