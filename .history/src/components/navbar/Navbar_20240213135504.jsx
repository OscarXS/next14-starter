import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'
import { auth } from '@/lib/auth'

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className={styles.container}>
        <Link className={styles.logo} href='/'>Oscar Blog</Link>
        <div>
            <Links session={session} />
        </div>
    </nav>
  )
}

export default Navbar