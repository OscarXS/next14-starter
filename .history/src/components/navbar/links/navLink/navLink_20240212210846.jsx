import Link from 'next/link'
import styles from './navLink.module.css'

const NavLink = ({ item }) => {
  return (
    <Link href={item.path} className={}>
        {item.title}
    </Link>
  )
}

export default NavLink