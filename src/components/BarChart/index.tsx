/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { SkiaChart, SvgChart, SVGRenderer } from '@wuba/react-native-echarts';
import { BarChart, LineChart } from 'echarts/charts';
// import EChartsInitOpts from 'echarts/types/dist/echarts'
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';

import Styles from './Styles';

// Register extensions
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  SVGRenderer,
  LegendComponent,
  LineChart,
  BarChart
]);

const E_HEIGHT = 370;
const E_WIDTH = Dimensions.get('screen').width;

interface ChartProps {
  option: any;
}

function SkiaComponent({ option }: ChartProps): JSX.Element {
  const skiaRef = useRef<any>(null);

  useEffect(() => {
    let chart: any;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [option]);

  return <SkiaChart ref={skiaRef} />;
}

function SvgComponent({ option }: ChartProps): JSX.Element {
  const svgRef = useRef<any>(null);

  useEffect(() => {
    let chart: any;
    if (svgRef.current) {
      chart = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [option]);

  return <SvgChart ref={svgRef} useRNGH />;
}

const option = {
  grid: {
    left: '2%',
    right: '7%',
    top: '20%',
    bottom: '5%',
    containLabel: true
  },
  yAxis: {
    type: 'category',
    data: ['BTM HEM', 'CARE', 'LBL', 'CARE MAKE']
  },
  xAxis: {
    type: 'value',
    position: 'top'
  },
  legend: {
    data: ['Operator1', 'Operator2', 'Operator3', 'Production', 'Process Target', 'Hourly Target']
  },
  series: [
    {
      name: 'Operator1',
      data: [120, 200, 150, 80],
      type: 'bar',
      stack: 'operator',
      barCategoryGap: '10%',
      barWidth: 30,
      barMaxWidth: 40,
      itemStyle: {
        color: '#F94144'
      }
    },
    {
      name: 'Operator2',
      data: [130, 180, 160, 90],
      type: 'bar',
      stack: 'operator',
      barCategoryGap: '10%',
      barWidth: 30,
      barMaxWidth: 40,
      itemStyle: {
        color: '#90BE6D'
      }
    },
    {
      name: 'Operator3',
      data: [110, 190, 140, 70],
      type: 'bar',
      stack: 'operator',
      barCategoryGap: '10%',
      barWidth: 30,
      barMaxWidth: 40,
      itemStyle: {
        color: '#2D9CDB'
      }
    },
    {
      type: 'line',
      name: 'Production',
      data: [100, 180, 120, 80],
      smooth: true,
      lineStyle: {
        color: '#14CA9E',
        width: 3
      }
    },
    {
      type: 'line',
      name: 'Process Target',
      data: [40, 70, 30, 20],
      smooth: true,
      lineStyle: {
        color: '#0047B0',
        width: 3
      }
    },
    {
      type: 'line',
      name: 'Hourly Target',
      data: [20, 50, 90, 30],
      smooth: true,
      lineStyle: {
        color: '#CACE00',
        width: 3
      }
    }
  ]
};

function App(): JSX.Element {
  return (
    <View style={Styles.container}>
      <SkiaComponent option={option} />
      <SvgComponent option={option} />
    </View>
  );
}

export default gestureHandlerRootHOC(App);
