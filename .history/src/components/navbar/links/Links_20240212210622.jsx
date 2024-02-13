import Link from 'next/link'
import styles from './links.module.css'
import NavLink from './navLink/navLink'

const Links = () => {
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
  return (
    <div className={styles.links}>
        {
            links.map((link) => (
                <NavLink item={} />
            ))
        }
    </div>
  )
}

export default Links