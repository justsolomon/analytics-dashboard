import { navLinkMenus } from 'utils/global';
import styles from './sidebar.module.scss';
import NavLinkMenu from './subcomponents/NavLinkMenu';

const Sidebar = () => {
  return (
    <aside className={styles['sidebar']}>
      <div className={styles['sidebar__user-info']}>
        <h2>Metacare</h2>
        <p>adeyinka@metacare.app</p>
      </div>

      <nav className={styles['sidebar__nav']}>
        {navLinkMenus.map((navLinkMenu, index) => (
          <NavLinkMenu {...navLinkMenu} key={index} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
