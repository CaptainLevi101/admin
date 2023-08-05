import React from 'react'
import { Header } from '../components'
import { customersData, customersGrid } from '../data/dummy'
import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Inject, Page, Search, Selection, Sort, Toolbar } from '@syncfusion/ej2-react-grids'

const Customers = () => {
  return (
   <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl overflow-hidden'>
    <Header category="Page" title="Customers"/>
   <GridComponent 
   id='gridcomp'
   dataSource={customersData}
   allowPaging
   allowSorting
   toolbar={['Delete']}
   editSettings={{allowDeleting:true,allowEditing:true}}
   width="auto"
   >
 <ColumnsDirective>
 {customersGrid.map((items,index)=><ColumnDirective key={index} {...items}/>)}
 </ColumnsDirective>
 <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
   </GridComponent>
 
    </div>
 
  )
}

export default Customers
