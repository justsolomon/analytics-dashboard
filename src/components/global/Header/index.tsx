import Input from '../Input';
import Button from '../Button';
import { ReactComponent as SearchIcon } from 'assets/vectors/search.svg';
import { ReactComponent as NotificationIcon } from 'assets/vectors/notification.svg';
import { ReactComponent as ArrowDownIcon } from 'assets/vectors/arrow-down.svg';
import { ReactComponent as HamburgerIcon } from 'assets/vectors/hamburger.svg';
import styles from './header.module.scss';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className={styles['header']}>
      <div>
        <Button
          iconButton
          onClick={toggleSidebar}
          className={styles['header__hamburger']}
        >
          <HamburgerIcon />
        </Button>

        <Input
          containerClass={styles['header__input']}
          rightIcon={<SearchIcon />}
          placeholder="Ask us any question"
        />
      </div>

      <div className={styles['header__menu']}>
        <div className={styles['header__menu__section']}>
          <NotificationIcon />
          <span>3</span>
        </div>
        <div className={styles['header__menu__divider']}></div>
        <div className={styles['header__menu__section']}>
          <span></span>
          <ArrowDownIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
