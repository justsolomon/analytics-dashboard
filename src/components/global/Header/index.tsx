import Input from '../Input';
import { ReactComponent as SearchIcon } from 'assets/vectors/search.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Input
        containerClass={styles['header__input']}
        rightIcon={<SearchIcon />}
        placeholder="Ask us any question"
      />
    </header>
  );
};

export default Header;
