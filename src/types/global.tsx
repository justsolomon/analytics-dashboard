import { ChartDataset } from 'chart.js';

export enum Routes {
  teams = '/',
  other = '#',
}

export interface NavLink {
  to: Routes;
  title: string;
}

export interface NavLinkMenu {
  title: string;
  icon: React.ReactNode;
  links: NavLink[];
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}
