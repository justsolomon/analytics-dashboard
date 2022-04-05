import { ChartData } from './global';

export interface Stat {
  label: string;
  value: string;
}

export interface AnalyticsChart {
  title: string;
  percentIncrease: number;
  color: string;
  stats: Stat[];
  data: ChartData;
}
