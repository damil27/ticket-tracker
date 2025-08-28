import { Skeleton } from '@/app/components';
import { Card, Flex } from '@radix-ui/themes';


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
