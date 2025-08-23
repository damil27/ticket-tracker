import Link from 'next/link';
import { Button } from '@radix-ui/themes';

export default function Home() {
  return (
    <div className=''>
      Hello world
      <Button>
        {' '}
        <Link href='/tickets/new'> New Ticket</Link>
      </Button>
    </div>
  );
}
