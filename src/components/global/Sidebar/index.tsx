import { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import NavLinkMenu from './subcomponents/NavLinkMenu';
import { ReactComponent as CloseIcon } from 'assets/vectors/close.svg';
import { navLinkMenus } from 'utils/global';
import styles from './sidebar.module.scss';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <aside
      className={`${styles['sidebar']} ${
        isOpen ? styles['sidebar--open'] : ''
      }`}
    >
      <div className={styles['sidebar__close-button']}>
        <Button iconButton onClick={toggleSidebar}>
          <CloseIcon />
        </Button>
      </div>

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
