import React from 'react'
import NextLink from 'next/link'
import {Link as RadixLink} from '@radix-ui/themes'
interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
//
}
const CustomLink = ({href, children, className, target}: LinkProps) => {

  return (
    <div>
        <NextLink href={href} passHref legacyBehavior>
            <RadixLink target={target} className={className}>{children}</RadixLink>
        </NextLink>

    </div>
  )
}

export default CustomLink

