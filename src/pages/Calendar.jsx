import React from 'react'
import { Header } from '../components'
import { Agenda, Day, DragAndDrop, Inject, Month, ScheduleComponent, Week, WorkWeek, Year } from '@syncfusion/ej2-react-schedule'
import { Resize } from '@syncfusion/ej2-react-grids'
import { scheduleData } from '../data/dummy'
const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24
     p-2 md:p-10 bg-white rounded-2xl'>
      <Header category="App" title="Calender" />
      <ScheduleComponent height="650px"
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2021,0,10)}>
        <Inject services={[Day, Week, Month
          , WorkWeek,Agenda,DragAndDrop]} />
      </ScheduleComponent>

    </div>
  )
}

export default Calendar
