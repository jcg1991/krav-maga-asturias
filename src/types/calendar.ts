
// Define event type
export interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  description: string;
  highlighted?: boolean;
  type?: 'inmuebles' | 'autoproteccion' | 'inmuebles_urbano';
}
