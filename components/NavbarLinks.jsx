import Link from 'next/link'
import React, { memo } from 'react'

const NavbarLinks = ({selector,className,onClick}) => {
  return (
    <>
      <Link href="/men">
            <a className={className} onClick={onClick}> Men</a>
          </Link>
          <Link href="/women">
            <a className={className} onClick={onClick}> Women</a>
          </Link>
          <Link href="/">
            <a className={className} onClick={onClick}> Kids</a>
          </Link>
          <Link href="/">
            <a className={className} onClick={onClick}> Living </a>
          </Link>
          <Link href="/">
            <a className={className} onClick={onClick}> Beauty</a>
          </Link>
          {selector?.admin ? (
            <Link href="/admin">
              <a className={className} onClick={onClick}>Admin</a>
            </Link>
          ) : (
            <Link href="/">
              <a className={className} onClick={onClick}>Studio</a>
            </Link>
          )}</>
  )
}

export default memo(NavbarLinks)