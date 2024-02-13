import Link from 'next/link'
import styles from './links/links.module.css'

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
    <div className={sty}>
        {
            links.map((link) => (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            ))
        }
    </div>
  )
}

export default Links