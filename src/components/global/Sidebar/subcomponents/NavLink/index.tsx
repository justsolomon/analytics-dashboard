import { NavLink as NavLinkProps } from 'types/global';
import styles from './navLink.module.scss';

const NavLink = ({ title, to }: NavLinkProps) => {
  return (
    <a
      href={to}
      className={`${styles['nav-link']} ${
        window.location.href.replace(window.location.origin, '') === to
          ? styles['nav-link__active']
          : ''
      }`}
    >
      {title}
    </a>
  );
};

export default NavLink;
