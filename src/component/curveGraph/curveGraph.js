import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { UserContext } from '../../useHooks/useDarkModeContext/useDarkModeContext';
import { dataset } from '../../useHooks/useCurveLineChart/useCurveLineChart';

export default function CurveLineChart() {
    const dark = React.useContext(UserContext);

    // Define the y-axis values where you want horizontal lines
    const yAxisLevels = [10, 20, 30]; // Adjust levels as needed

    return (
        <div style={{ position: 'relative', height: '300px' }}>
            {/* Overlaying horizontal lines on each level */}
            <div className='flex flex-col justify-center items-center m-auto'>
                {yAxisLevels.map((level, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: `${100 - (level / 45) * 100 - 18}%`, // Position based on y-axis range
                            // left: 0,
                            // right: 0,
                            width: '80%',
                            zIndex: 0,
                            height: '1px',
                            backgroundColor: dark ? 'grey' : '#E0E0E0',
                            opacity: 0.5, // Slight opacity for a subtle effect
                        }}
                    />
                ))}
            </div>
            <LineChart
                className='text-white !z-1'
                sx={{
                    borderRadius: '20px',
                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.4",
                        fill: dark ? "grey" : 'black'
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.5",
                        fill: dark ? "grey" : 'black'
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                        stroke: "grey",
                        strokeWidth: 0.4
                    },
                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                        stroke: dark ? "rgb(39 39 39 / 5%) !important" : 'var(--Primary-Light, rgba(247, 249, 251, 1)) !important',
                        strokeWidth: 0.4
                    },
                    "& .MuiChartsAxis-tick": {
                        stroke: dark ? "rgb(39 39 39 / 5%) !important" : 'var(--Primary-Light, rgba(247, 249, 251, 1)) !important',
                        strokeWidth: 0.4
                    },
                    "& .MuiChartsAxis-tickLabel": {
                        fill: dark ? '#767676 !important' : '#00000063 !important',
                    }
                }}
                dataset={dataset}
                series={[
                    {
                        data: [20, 25, 23, 27, 18, 25],
                        color: dark ? 'var(--Secondary-Cyan, rgba(168, 197, 218, 1))' : 'black',
                        curveType: 'natural',  // Defines the smooth curve
                        lineStyle: {
                            strokeWidth: 2,  // Line thickness
                        },
                        showMark: false,
                        markerStyle: {
                            size: 0, // Size of the marker points
                        }
                    },
                    {
                        dataKey: 'datas',
                        color: 'rgb(210 224 243)',
                        curveType: 'natural',  // Defines the smooth curve
                        lineStyle: {
                            strokeWidth: 2,  // Line thickness
                        },
                        showMark: false,
                        markerStyle: {
                            size: 0, // Size of the marker points
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
                            // fill: '#FFFFFF', // x-axis tick labels color
                        },
                    }
                ]}
                yAxis={[
                    {
                        scaleType: 'linear',
                        valueFormatter: (value) => `${value}M`, // Add dollar sign to y-axis

                    },
                ]}
                height={300}
            />
        </div>
    );
}
