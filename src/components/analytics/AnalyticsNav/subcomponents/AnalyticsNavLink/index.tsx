import { NavLink } from 'types/global';
import styles from './analyticsNavLink.module.scss';

const AnalyticsNavLink = ({ title, to }: NavLink) => {
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

export default AnalyticsNavLink;
