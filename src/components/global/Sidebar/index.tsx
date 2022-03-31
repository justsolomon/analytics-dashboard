import { navLinkMenus } from 'utils/global';
import styles from './sidebar.module.scss';
import NavLinkMenu from './subcomponents/NavLinkMenu';

const Sidebar = () => {
  return (
    <aside className={styles['sidebar']}>
      {navLinkMenus.map((navLinkMenu, index) => (
        <NavLinkMenu {...navLinkMenu} key={index} />
      ))}
    </aside>
  );
};

export default Sidebar;
