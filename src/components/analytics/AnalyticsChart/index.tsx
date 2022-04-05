import { useState } from 'react';
import { ReactComponent as CalendarIcon } from 'assets/vectors/calendar.svg';
import { AnalyticsChart as AnalyticsChartProps } from 'types/analytics';
import Select from 'components/global/Select/select';
import Chart from 'components/global/Chart';
import AnalyticsStatCard from '../AnalyticsStatCard';
import styles from './analyticsChart.module.scss';

const AnalyticsChart = ({
  title,
  percentIncrease,
  color,
  stats,
  data,
}: AnalyticsChartProps) => {
  const [duration, setDuration] = useState('month');

  return (
    <div className={styles['analytics-chart']}>
      <div className={styles['analytics-chart__info']}>
        <div className={styles['analytics-chart__info__header']}>
          <div>
            <h2>{title}</h2>
            <span className={styles['analytics-chart__info__tag']}>
              +{percentIncrease}%
            </span>
          </div>

          <div>
            <div className={styles['analytics-chart__info__priority']}>
              <span style={{ backgroundColor: color }}></span>
              <p>High Priority</p>
            </div>

            <Select
              options={[
                { label: 'This Week', value: 'week' },
                { label: 'This Month', value: 'month' },
                { label: 'This Year', value: 'year' },
              ]}
              icon={<CalendarIcon />}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>

        <div className={styles['analytics-chart__info__chart']}>
          <Chart type="line" data={data} borderColor={color} />
        </div>
      </div>

      <div className={styles['analytics-chart__stats']}>
        {stats.map((stat, index) => (
          <AnalyticsStatCard {...stat} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsChart;
<svg
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 352 512"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
</svg>;
