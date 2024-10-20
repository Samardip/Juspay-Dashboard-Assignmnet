import React from 'react'
import { BoxChats } from '../../common/boxChats/boxChats'
import BarChartGraph from '../../common/barchat/barchart'
import { ChartStats } from '../../common/chartStats/chartStats'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ProductTable from '../productTable/productTable'
import OrderListTable from '../../common/orderListTable/orderListTable'
import CurvedLineChart from '../curveGraph/curveGraph'
import { boxChats, data, RevenueLocationData, salesData } from '../../useHooks/useDashboard/useDashboard'
import CircleIcon from '@mui/icons-material/Circle';

Chart.register(ArcElement, Tooltip, Legend);

export const Dashboard = () => {

    return (
        <div className='mx-[30px] my-[30px] flex flex-col justify-between items-center gap-10 z-0 dark:border-gray-600'>
            <div className='flex justify-start w-[100%]'>
                <div className='font-bold'>{'eCommerce'}</div>
            </div>
            <div className='flex justify-center items-center w-[100%] gap-6'>
                <div className='w-2/4 grid grid-cols-2 row-2 gap-8 '>
                    {
                        boxChats.map((item) => {
                            return <BoxChats stats={item} />

                        })
                    }
                </div>
                <div className='w-2/4 bg-custom-grey dark:bg-custom-black-5 dark:text-custom-grey rounded-[20px]'>
                    <div className='flex flex-col items-start w-[100%]'>
                        <div className='font-bold relative left-[26px] top-[20px]'>{'Projections vs Actuals'}</div>
                        <BarChartGraph />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center w-[100%] gap-6'>
                <div className='w-3/4 bg-custom-grey dark:bg-custom-black-5 rounded-[20px]'>
                    <div className='flex gap-5 text-left m-[20px] w-[100%] justify-start items-center'>
                        <spam className="font-bold ">
                            {'Top Selling Product'}
                        </spam>
                        <spam>
                            |
                        </spam>
                        <div className={`flex justify-start gap-2 my-2 cursor-pointer `}>
                            <div className='text-gray-300 flex justify-center items-center' onClick={(e) => { }}>
                                <CircleIcon style={{ fontSize: '10px' }} visibility={false} />
                            </div>
                            <div className='text-[12px] flex justify-center items-center text-sm gap-2'>{'Current Week'}<spam className="font-bold">$58,211</spam></div>
                        </div>
                        <div className={`flex justify-start gap-2 my-2 cursor-pointer`}>
                            <div className='text-gray-300 flex justify-center items-center' onClick={(e) => { }}>
                                <CircleIcon style={{ fontSize: '10px' }} visibility={false} />
                            </div>
                            <div className='text-[12px] flex justify-center items-center text-sm gap-2'>{'Previous Week'}<spam className="font-bold">$62,501</spam></div>
                        </div>
                    </div>
                    <CurvedLineChart />
                </div>
                <div className='w-1/4'>
                    <div className='flex flex-col items-center justify-start w-[100%] pb-[20px] bg-custom-grey dark:bg-custom-black-5 rounded-[20px]'>
                        <div className='font-bold text-left m-[20px] w-[80%]'>{'Revenue by Location'}</div>
                        <div>
                            <img src="./assests/map.png" alt="map" />
                        </div>
                        {
                            RevenueLocationData.map((item) => {
                                return <ChartStats stats={item} type={'location'} />
                            })
                        }

                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center w-[100%] gap-6'>
                <div className='w-3/4 bg-custom-grey dark:bg-custom-black-5 rounded-[20px] flex flex-col items-center'>
                    <div className='font-bold text-left m-[20px] w-[100%] relative left-[30px]'>{'Top Selling Product'}</div>
                    <ProductTable />
                </div>
                <div className='w-1/4'>
                    <div className='flex flex-col items-center justify-start w-[100%] pb-[20px] bg-custom-grey dark:bg-custom-black-5 rounded-[20px]'>
                        <div className='font-bold text-left m-[20px] w-[80%]'>{'Total Sales'}</div>
                        <div>
                            <Doughnut data={data} width={150} height={150} />
                        </div>
                        {
                            salesData.map((item) => {
                                return <ChartStats stats={item} type={'pie'} />
                            })
                        }

                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start w-[100%]'>
                <div className='font-bold text-left m-[20px] w-[100%]'>{'Order List'}</div>
                <OrderListTable />
            </div>
        </div>
    )
}
