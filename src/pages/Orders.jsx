import React from 'react'
import { Header } from '../components'
import {ContextMenu, GridComponent, PdfExport,Resize,Page,Sort,Edit,Filter} from '@syncfusion/ej2-react-grids'
import { ColumnDirective,ColumnsDirective, Inject } from '@syncfusion/ej2-react-charts'
import { ordersData, ordersGrid } from '../data/dummy'
const Orders = () => {
  return (
   
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl overflow-hidden'>
      <Header category="Page" title="Orders"/>
     <GridComponent 
     id='gridcomp'
     dataSource={ordersData}
     allowPaging
     allowSorting>
   <ColumnsDirective>
   {ordersGrid.map((items,index)=><ColumnDirective key={index} {...items}/>)}
   </ColumnsDirective>
   <Inject services={[Resize,Sort,ContextMenu,Filter,Page,Edit,PdfExport]}/>
     </GridComponent>
   
      </div>
   
  )
} 

export default Orders
