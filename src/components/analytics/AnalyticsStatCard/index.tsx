import { Stat } from 'types/analytics';
import styles from './analyticsStatCard.module.scss';

const AnalyticsStatCard = ({ label, value }: Stat) => {
  return (
    <div className={styles['stat-card']}>
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
};

export default AnalyticsStatCard;
