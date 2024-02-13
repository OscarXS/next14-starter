import styles from './navLink.module.css'

const NavLink = ({ link }) => {
  return (
    <Link href={link.path} key={link.title}>{link.title}</Link>
  )
}

export default NavLink