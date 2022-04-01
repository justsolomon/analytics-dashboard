import { useEffect, useState } from 'react';
import Button from 'components/global/Button';
import NavLink from '../NavLink';
import { NavLinkMenu as NavLinkMenuProps } from 'types/global';
import { ReactComponent as ArrowLeftIcon } from 'assets/vectors/arrow-left.svg';
import styles from './navLinkMenu.module.scss';

const NavLinkMenu = ({ title, icon, links }: NavLinkMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const hasActiveLink = links.findIndex(
      (link) => link.to === window.location.pathname,
    );

    if (hasActiveLink > -1) setIsOpen(true);
  }, [links]);

  return (
    <div
      className={`${styles['nav-link-menu']} ${
        isOpen ? styles['nav-link-menu--open'] : ''
      }`}
    >
      <Button
        className={styles['nav-link-menu__button']}
        variant="transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {icon}
          {title}
        </span>

        <span className={styles['nav-link-menu__button__dropdown-icon']}>
          <ArrowLeftIcon />
        </span>
      </Button>

      {isOpen ? (
        <div className={styles['nav-link-menu__links']}>
          {links.map((link, index) => (
            <NavLink {...link} key={index} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NavLinkMenu;
