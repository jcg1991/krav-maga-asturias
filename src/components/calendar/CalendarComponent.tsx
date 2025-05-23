
import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CalendarLegend from './CalendarLegend';
import { CalendarEvent } from '@/types/calendar';

interface CalendarComponentProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  events: CalendarEvent[];
}

const CalendarComponent = ({ date, setDate, events }: CalendarComponentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Selecciona una fecha</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow pointer-events-auto"
          modifiersClassNames={{
            selected: "bg-primary text-primary-foreground",
          }}
          modifiers={{
            inmuebles: events
              .filter(event => event.type === 'inmuebles')
              .map(event => new Date(event.date)),
            autoproteccion: events
              .filter(event => event.type === 'autoproteccion')
              .map(event => new Date(event.date)),
            inmuebles_urbano: events
              .filter(event => event.type === 'inmuebles_urbano')
              .map(event => new Date(event.date))
          }}
          modifiersStyles={{
            inmuebles: {
              backgroundColor: "#8B5CF6",
              color: "white",
              fontWeight: "bold"
            },
            autoproteccion: {
              backgroundColor: "#F97316",
              color: "white",
              fontWeight: "bold"
            },
            inmuebles_urbano: {
              backgroundColor: "#3B82F6",
              color: "white",
              fontWeight: "bold"
            }
          }}
        />
        <CalendarLegend />
      </CardContent>
    </Card>
  );
};

export default CalendarComponent;
