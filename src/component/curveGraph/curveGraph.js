import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { UserContext } from '../../useHooks/useDarkModeContext/useDarkModeContext';
import { dataset } from '../../useHooks/useCurveLineChart/useCurveLineChart';

export default function CurveLineChart() {
    const dark = React.useContext(UserContext);
    return (
        <LineChart
            className='text-white'
            sx={{
                borderRadius: '20px',
                "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                    strokeWidth: "0.4",
                    fill: dark ? "grey" : 'black'
                },
                // change all labels fontFamily shown on both xAxis and yAxis
                // "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                //     fontFamily: "Roboto",
                // },
                // change bottom label styles
                "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                    strokeWidth: "0.5",
                    fill: dark ? "grey" : 'black'
                },
                // bottomAxis Line Styles
                "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                    stroke: dark ? "grey" : 'black',
                    strokeWidth: 0.4
                },
                // leftAxis Line Styles
                "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                    stroke: dark ? "grey" : 'black',
                    strokeWidth: 0.4
                }
            }}
            dataset={dataset}
            series={[
                {
                    data: [20, 25, 23, 27, 18, 25],
                    color: 'var(--Secondary-Cyan, rgba(168, 197, 218, 1))',
                    curveType: 'natural',  // Defines the smooth curve
                    lineStyle: {
                        strokeWidth: 2,  // Line thickness
                    },
                    showMark:false,
                    markerStyle: {
                        // shape: 'circle',  // Shape of the points on the line
                        size: 0,          // Size of the marker points
                    }
                },
                {
                    dataKey: 'datas',
                    color: 'rgb(210 224 243)',
                    curveType: 'natural',  // Defines the smooth curve
                    lineStyle: {
                        strokeWidth: 2,  // Line thickness
                    },
                    showMark: false ,
                    markerStyle: {
                        // shape: 'circle',  // Shape of the points on the line
                        size: 0,          // Size of the marker points
                    }
                    
                },
            ]}
            xAxis={[
                {
                    scaleType: 'band',
                    dataKey: 'month',
                    categoryGapRatio: 0.6,
                    barGapRatio: 0.2,
                    axisLine: {
                        lineStyle: { stroke: '#FFFFFF' }, // x-axis line color
                    },
                    tickStyle: {
                        fill: '#FFFFFF', // x-axis tick labels color
                    },
                }
            ]}
            yAxis={[
                {
                    scaleType: 'linear',
                    valueFormatter: (value) => `${value}M`, // Add dollar sign to y-axis
                },
            ]}
            // width={700}
            height={300}
        />
    );
}
