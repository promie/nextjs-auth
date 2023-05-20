'use client'

import { FC } from 'react'
import Link from 'next/link'
import SignInButton from '@components/SignInButton'

const AppBar: FC = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href="/">
        Home Page
      </Link>
      <Link className="transition-colors hover:text-blue-500" href="/user-post">
        User Post Page
      </Link>
      <SignInButton />
    </header>
  )
}

export default AppBar
