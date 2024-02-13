import Link from 'next/link'
import styles from './navLink.module.css'

const NavLink = ({ item }) => {

    const 
  return (
    <Link href={item.path} className={`${styles.container} : `}>
        {item.title}
    </Link>
  )
}

export default NavLink