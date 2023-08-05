import { ChartComponent, DateTime, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import React from 'react'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis, lineCustomSeries } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider';

const AreaChart = () => {
    const { currentMode } = useStateContext();
    return (
        <ChartComponent
            id='area-chart'
            height='480px'
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {areaCustomSeries.map((item, index) =>
                    <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default AreaChart
