import React from 'react'
import { Header } from '../components'
import {ContextMenu, GridComponent, PdfExport,Resize,Page,Sort,Edit,Filter, Search, Toolbar} from '@syncfusion/ej2-react-grids'
import { ColumnDirective,ColumnsDirective, Inject } from '@syncfusion/ej2-react-charts'
import { employeesData, employeesGrid, ordersData, ordersGrid } from '../data/dummy'
const Employees = () => {
  return (
   
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl overflow-hidden'>
      <Header category="Page" title="Orders"/>
     <GridComponent 
     id='gridcomp'
     dataSource={employeesData}
     allowPaging
     allowSorting
     toolbar={['Search']}
     width="auto"
     >
   <ColumnsDirective>
   {employeesGrid.map((items,index)=><ColumnDirective key={index} {...items}/>)}
   </ColumnsDirective>
   <Inject services={[Page,Search,Toolbar]}/>
     </GridComponent>
   
      </div>
   
  )
} 

export default Employees;
