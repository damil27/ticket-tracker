import React from 'react'
import Link from 'next/link'
import { BsTicketDetailed } from "react-icons/bs";

const Navbar = () => {
    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Ticket", href: "/ticket" },
    ]
  return (
    <nav className=' flex h-14 border-b  items-center space-x-6 px-5 '>
      <Link href="/"> <BsTicketDetailed /></Link>
      <ul className='flex space-x-6'>
        {links.map(link => <Link className='text-zinc-500 hover:text-zinc-900 transition-colors'  href={link.href} key={link.label}>
            {link.label}</Link>
            )}

      </ul>
    </nav>
  )
}

export default Navbar

