import AnalyticsChart from 'components/analytics/AnalyticsChart';
import AnalyticsHeader from 'components/analytics/AnalyticsHeader';
import AnalyticsNav from 'components/analytics/AnalyticsNav';
import { analyticsCharts } from 'utils/analytics';

const TeamsAnalyticsContainer = () => {
  return (
    <>
      <AnalyticsNav />
      <AnalyticsHeader />
      <div>
        {analyticsCharts.map((chart, index) => (
          <AnalyticsChart {...chart} key={index} />
        ))}
      </div>
    </>
  );
};

export default TeamsAnalyticsContainer;
