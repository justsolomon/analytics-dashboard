import Input from '../Input';
import { ReactComponent as SearchIcon } from 'assets/vectors/search.svg';
import { ReactComponent as NotificationIcon } from 'assets/vectors/notification.svg';
import { ReactComponent as ArrowDownIcon } from 'assets/vectors/arrow-down.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Input
        containerClass={styles['header__input']}
        rightIcon={<SearchIcon />}
        placeholder="Ask us any question"
      />

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
