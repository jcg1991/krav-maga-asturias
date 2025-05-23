
import React from 'react';

const CalendarLegend = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded-full bg-[#8B5CF6]"></div>
        <span className="text-sm">Curso Apertura Intervenciones</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded-full bg-[#F97316]"></div>
        <span className="text-sm">Curso Autoprotección Civiles</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded-full bg-[#3B82F6]"></div>
        <span className="text-sm">Curso Intervención en Inmuebles y Zonas Urbanizadas</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-100 border border-blue-400"></div>
        <span className="text-sm">Otros eventos</span>
      </div>
    </div>
  );
};

export default CalendarLegend;
