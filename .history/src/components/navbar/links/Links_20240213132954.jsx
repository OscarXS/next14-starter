"use client"

import { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
import { handleGithubLogout } from '@/lib/actions'

const links = [
    {
    title: 'Home',
    path: '/'  
    },
    {
    title: 'About',
    path: '/about'  
    },
    {
    title: 'Contact',
    path: '/contact'  
    },
    {
    title: 'Blog',
    path: '/blog'  
    }
]
const Links = ({ session:  }) => {
    const [open, setOpen] = useState(false)

    const isAdmin = true
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {
                links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))
            }{
                session ? (
                    <>
                        {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
                        <form action={handleGithubLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login' }} />
                )
            }
        </div>

        <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
        {
            open && (
                <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}/>
                ))}
                </div>
            )
            
        }
    </div>
  )
}

export default Links