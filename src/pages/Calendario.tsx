
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CalendarComponent from '../components/calendar/CalendarComponent';
import EventsList from '../components/calendar/EventsList';
import { calendarEvents } from '../data/calendarEvents';

const CalendarioPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Calendario de Cursos y Eventos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <CalendarComponent 
              date={date} 
              setDate={setDate} 
              events={calendarEvents} 
            />
          </div>
          
          <div className="md:col-span-2">
            <EventsList date={date} events={calendarEvents} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarioPage;
