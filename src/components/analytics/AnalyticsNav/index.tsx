import AnalyticsNavLink from './subcomponents/AnalyticsNavLink';
import { Routes } from 'types/global';
import styles from './analyticsNav.module.scss';

const AnalyticsNav = () => {
  const navLinks = [
    { title: 'Efficiency', to: Routes.teams },
    { title: 'Volume', to: Routes.other },
    { title: 'Customer Satisfaction', to: Routes.other },
    { title: 'Backlog', to: Routes.other },
  ];

  return (
    <nav className={styles['analytics-nav']}>
      {navLinks.map((navLink, index) => (
        <AnalyticsNavLink {...navLink} key={index} />
      ))}
    </nav>
  );
};

export default AnalyticsNav;
