'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { BsTicketDetailed } from 'react-icons/bs';

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Tickets', href: '/tickets' },
  ];
  return (
    <nav className=' flex h-14 border-b border-zinc-200 mb-4  items-center space-x-6 px-5 '>
      <Link href='/'>
        {' '}
        <BsTicketDetailed />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            className={classNames({
              'text-zinc-900': link.href == currentPath,
              'text-zinc-500': link.href != currentPath,
              'hover:text-zinc-900 transition-colors': true,
            })}
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
