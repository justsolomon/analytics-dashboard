import { useEffect, useRef, useState } from 'react';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import ChartComponent from 'chart.js/auto';

export interface ChartProps {
  type: ChartType;
  data: ChartData;
  borderColor: string;
  labelSize?: number;
  customOptions?: ChartOptions;
}

const Chart = (props: ChartProps): JSX.Element => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [chart, setChart] = useState<ChartComponent>();
  const { type, data, labelSize, borderColor, customOptions } = props;

  const defaultOptions: ChartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: 'nearest',
        backgroundColor: '#fafafa',
        borderColor: '#DFE0EB',
        borderWidth: 1,
        cornerRadius: 4,
        caretSize: 10,
        padding: 10,
        titleColor: '#060213',
        titleFont: { size: 18, weight: '700' },
        titleAlign: 'center',
        bodyColor: '#060213',
        bodyFont: { size: 16, weight: '500' },
        bodyAlign: 'center',
        displayColors: false,
        usePointStyle: true,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        position: 'left',
        grid: {
          drawBorder: false,
        },
        ticks: {
          color: '#696D8C',
          padding: 18,
          precision: 0,
          stepSize: 10,
          font: { size: 14 },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#696D8C',
          padding: 14,
          font: {
            size: labelSize ? labelSize : 14,
          },
        },
      },
    },
  };

  const defaultDatasetProps = {
    fill: 'start',
    tension: 0,
    borderColor,
    borderWidth: 2,
    radius: 6,
    backgroundColor: 'transparent',
    pointRadius: 6,
    pointHoverRadius: 7,
    pointBorderWidth: 1,
    pointHoverBorderWidth: 3,
    pointBorderColor: borderColor,
    pointHoverBorderColor: borderColor,
    pointBackgroundColor: '#fff',
    pointHoverBackgroundColor: '#fff',
  };

  const extendDatasets = () => {
    for (let i = 0; i < data.datasets.length; i++) {
      data.datasets[i] = {
        ...defaultDatasetProps,
        ...data.datasets[i],
      };
    }
  };

  const renderChart = () => {
    if (!canvas.current) return;

    //destroy any existing chart
    destroyChart();

    extendDatasets();

    //set chart defaults
    ChartComponent.defaults.font.family = "'Gelion', sans-serif";

    //set new chart instance in state
    setChart(
      new ChartComponent(
        canvas.current.getContext('2d') as CanvasRenderingContext2D,
        {
          type,
          data,
          options: {
            ...defaultOptions,
            ...customOptions,
          },
        },
      ),
    );
  };

  const destroyChart = () => {
    if (chart) chart.destroy();
  };

  useEffect(() => {
    renderChart();

    return () => destroyChart();
  }, [data]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas aria-label="Chart Canvas" role="img" ref={canvas}>
      <p>Your browser does not support the canvas element.</p>
    </canvas>
  );
};

export default Chart;
