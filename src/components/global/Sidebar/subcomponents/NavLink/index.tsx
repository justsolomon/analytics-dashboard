import { NavLink as NavLinkProps } from 'types/global';
import styles from './navLink.module.scss';

const NavLink = ({ title, to }: NavLinkProps) => {
  return (
    <a
      href={to}
      className={`${styles['nav-link']} ${
        window.location.pathname === to ? styles['nav-link--active'] : ''
      }`}
    >
      {title}
    </a>
  );
};

export default NavLink;
