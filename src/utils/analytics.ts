import { AnalyticsChart } from 'types/analytics';
import { ChartData } from 'types/global';

const generateData = (type: string): ChartData => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const data = [];

  for (let i = 0; i < labels.length - 1; i++) {
    //add random numbers between 10 and 50 to dataset
    data.push(Math.floor(Math.random() * 40) + 10);
  }

  return {
    labels,
    datasets: [{ label: `Number of ${type}`, data: [13, ...data] }],
  };
};

export const analyticsCharts: AnalyticsChart[] = [
  {
    title: 'Average response Time',
    percentIncrease: 4.14,
    color: '#F05D23',
    stats: [
      { label: 'Average response time', value: '30 mins' },
      { label: 'Response time', value: '1 hour 30 mins' },
    ],
    data: generateData('responses'),
  },
  {
    title: 'Replies per resolution',
    percentIncrease: 4.14,
    color: '#3E68FF',
    stats: [
      { label: 'Average replies', value: '30 mins' },
      { label: 'Response time', value: '1 hour 30 mins' },
    ],
    data: generateData('replies'),
  },
  {
    title: 'Average resolution time',
    percentIncrease: 4.14,
    color: '#FB6491',
    stats: [
      { label: 'Average resolution rate', value: '30 mins' },
      { label: 'Response time', value: '1 hour 30 mins' },
    ],
    data: generateData('resolutions'),
  },
  {
    title: 'First contact resolution rate',
    percentIncrease: 4.14,
    color: '#07C9E2',
    stats: [
      { label: 'Average contact rate', value: '30 mins' },
      { label: 'Response time', value: '1 hour 30 mins' },
    ],
    data: generateData('contacts'),
  },
];
