
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarEvent } from '@/types/calendar';

interface EventsListProps {
  date: Date | undefined;
  events: CalendarEvent[];
}

const EventsList = ({ date, events }: EventsListProps) => {
  // Get events for selected date
  const getEventsForSelectedDate = () => {
    if (!date) return [];
    
    return events.filter(event => 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const selectedDateEvents = getEventsForSelectedDate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {date ? (
            `Eventos para ${date.toLocaleDateString('es-ES', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}`
          ) : 'Seleccione una fecha'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {selectedDateEvents.length > 0 ? (
          <div className="space-y-4">
            {selectedDateEvents.map(event => (
              <div 
                key={event.id} 
                className={`border-b pb-4 last:border-0 ${
                  event.type === 'inmuebles' 
                    ? 'bg-purple-50 p-4 rounded-md border border-purple-200' 
                    : event.type === 'autoproteccion'
                      ? 'bg-orange-50 p-4 rounded-md border border-orange-200'
                      : event.type === 'inmuebles_urbano'
                        ? 'bg-blue-50 p-4 rounded-md border border-blue-200'
                        : ''
                }`}
              >
                <h3 className={`text-lg font-medium ${
                  event.type === 'inmuebles' 
                    ? 'text-purple-800' 
                    : event.type === 'autoproteccion'
                      ? 'text-orange-800'
                      : event.type === 'inmuebles_urbano'
                        ? 'text-blue-800'
                        : ''
                }`}>
                  {event.title}
                </h3>
                <p className={
                  event.type === 'inmuebles' 
                    ? 'text-purple-700' 
                    : event.type === 'autoproteccion'
                      ? 'text-orange-700'
                      : event.type === 'inmuebles_urbano'
                        ? 'text-blue-700'
                        : 'text-gray-600'
                }>
                  {event.description}
                </p>
                
                {event.highlighted && (
                  <div className="mt-3">
                    <Link 
                      to={event.type === 'autoproteccion' 
                        ? "/curso-autoproteccion" 
                        : event.type === 'inmuebles_urbano'
                          ? "/curso-inmuebles-urbano"
                          : "/cursos"}
                      className={
                        event.type === 'inmuebles' 
                          ? 'text-[#8B5CF6] hover:text-[#7E69AB] font-medium underline' 
                          : event.type === 'autoproteccion'
                            ? 'text-[#F97316] hover:text-[#EA580C] font-medium underline'
                            : 'text-[#3B82F6] hover:text-[#2563EB] font-medium underline'
                      }
                    >
                      Ver detalles del curso
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No hay eventos programados para este día.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default EventsList;
