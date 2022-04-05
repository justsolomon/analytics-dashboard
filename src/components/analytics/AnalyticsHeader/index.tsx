import Input from 'components/global/Input';
import { ReactComponent as SearchIcon } from 'assets/vectors/search.svg';
import styles from './analyticsHeader.module.scss';
import Select from 'components/global/Select/select';
import Button from 'components/global/Button';

const AnalyticsHeader = () => {
  return (
    <div className={styles['analytics-header']}>
      <h1>Efficiency Analytics</h1>

      <div className={styles['analytics-header__action-items']}>
        <Input leftIcon={<SearchIcon />} placeholder="Search" />
        <Select options={[]} placeholder="Filter Options" />
        <Button>Export</Button>
      </div>
    </div>
  );
};

export default AnalyticsHeader;
