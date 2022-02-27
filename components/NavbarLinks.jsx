import Link from 'next/link'
import React from 'react'

const NavbarLinks = ({selector}) => {
  return (
    <>
      <Link href="/men">
            <a> Men</a>
          </Link>
          <Link href="/women">
            <a> Women</a>
          </Link>
          <Link href="/">
            <a> Kids</a>
          </Link>
          <Link href="/">
            <a> Living </a>
          </Link>
          <Link href="/">
            <a> Beauty</a>
          </Link>
          {selector?.admin ? (
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          ) : (
            <Link href="/">
              <a>Studio</a>
            </Link>
          )}</>
  )
}

export default NavbarLinks