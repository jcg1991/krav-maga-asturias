import { CalendarEvent } from "../types/calendar";

// Sample events data
export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Curso de Defensa Personal Básico",
    date: new Date(2025, 5, 15), // June 15, 2025
    description: "Aprende técnicas básicas de defensa personal. Dirigido a principiantes."
  },
  {
    id: 2,
    title: "Seminario Avanzado de Krav Maga",
    date: new Date(2025, 5, 22), // June 22, 2025
    description: "Seminario intensivo para practicantes con experiencia previa."
  },
  {
    id: 3,
    title: "Curso Especial para Cuerpos de Seguridad",
    date: new Date(2025, 6, 5), // July 5, 2025
    description: "Formación especializada para profesionales de seguridad."
  },
  {
    id: 4, 
    title: "Entrenamiento de Técnicas Avanzadas",
    date: new Date(2025, 6, 15), // July 15, 2025
    description: "Sesión de entrenamiento para cinturones avanzados."
  },
  // Course dates - highlighted with type inmuebles
  {
    id: 5,
    title: "CURSO APERTURA INTERVENCIONES EN INMUEBLES - Día 1",
    date: new Date(2025, 5, 24), // June 24, 2025
    description: "Primer día del curso de intervenciones en inmuebles impartido por Operativo Unidad Especial.",
    highlighted: true,
    type: 'inmuebles'
  },
  {
    id: 6,
    title: "CURSO APERTURA INTERVENCIONES EN INMUEBLES - Día 2",
    date: new Date(2025, 5, 25), // June 25, 2025
    description: "Segundo día del curso de intervenciones en inmuebles impartido por Operativo Unidad Especial.",
    highlighted: true,
    type: 'inmuebles'
  },
  {
    id: 7,
    title: "CURSO APERTURA INTERVENCIONES EN INMUEBLES - Día 3",
    date: new Date(2025, 5, 26), // June 26, 2025
    description: "Tercer día del curso de intervenciones en inmuebles impartido por Operativo Unidad Especial.",
    highlighted: true,
    type: 'inmuebles'
  },
  // Adding the new Autoprotección course - highlighted with type autoproteccion
  {
    id: 8,
    title: "CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR - Día 1",
    date: new Date(2025, 4, 24), // May 24, 2025
    description: "Primer día del curso de autoprotección para civiles y defensa del hogar.",
    highlighted: true,
    type: 'autoproteccion'
  },
  {
    id: 9,
    title: "CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR - Día 2",
    date: new Date(2025, 4, 25), // May 25, 2025
    description: "Segundo día del curso de autoprotección para civiles y defensa del hogar.",
    highlighted: true,
    type: 'autoproteccion'
  },
  // Adding the new Curso Inmuebles Urbano - highlighted with type inmuebles_urbano
  {
    id: 10,
    title: "CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS - Día 1",
    date: new Date(2025, 0, 11), // January 11, 2025
    description: "Primer día del curso de intervención en inmuebles y zonas urbanizadas.",
    highlighted: true,
    type: 'inmuebles_urbano'
  },
  {
    id: 11,
    title: "CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS - Día 2",
    date: new Date(2025, 0, 12), // January 12, 2025
    description: "Segundo día del curso de intervención en inmuebles y zonas urbanizadas.",
    highlighted: true,
    type: 'inmuebles_urbano'
  }
];
