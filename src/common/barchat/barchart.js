import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset } from '../../useHooks/useBarChart/useBarChart';
import { UserContext } from '../../useHooks/useDarkModeContext/useDarkModeContext';

export default function BarChartGraph() {
    const dark = React.useContext(UserContext);
    return (
        <BarChart
            className='text-white'
            sx={{
                borderRadius: '20px',
                "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                    strokeWidth: "0.4",
                    fill: dark?"grey":'black'
                },
                // change all labels fontFamily shown on both xAxis and yAxis
                // "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                //     fontFamily: "Roboto",
                // },
                // change bottom label styles
                "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                    strokeWidth: "0.5",
                    fill: dark?"grey":'black'
                },
                // bottomAxis Line Styles
                "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                    stroke: dark?"grey":'black',
                    strokeWidth: 0.4
                },
                // leftAxis Line Styles
                "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                    stroke: dark?"grey":'black',
                    strokeWidth: 0.4
                }
            }}
            dataset={dataset}
            series={[
                {
                    data: [20, 25, 23, 27, 18, 25], stack: 'barData', color: 'var(--Secondary-Cyan, rgba(168, 197, 218, 1))'
                    , barStyle: {
                        borderTopLeftRadius: '10px', // Top left corner radius
                        borderTopRightRadius: '10px', // Top right corner radius
                    },
                },
                {
                    dataKey: 'datas', stack: 'barData', color: 'rgb(210 224 243)', barStyle: {
                        borderTopLeftRadius: '10px', // Top left corner radius
                        borderTopRightRadius: '10px', // Top right corner radius
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
            // width={500}
            height={250}
        />
    );
}
