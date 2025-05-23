
import React from 'react';
import CourseCard from './CourseCard';

const ConvocatoriaCursoEntrenadorKravMagaCourse = () => {
  return (
    <CourseCard 
      title="CONVOCATORIA DE CURSO DE ENTRENADOR DE KRAV MAGA"
      id="convocatoria-curso-entrenador"
    >
      <div className="space-y-4">
        {/* Increased image size and improved container */}
        <div className="flex justify-center my-6">
          <img 
            src="/uploads/a97d0635-eeff-4f28-83e4-92906c4e6acd.png" 
            alt="Logo Krav Maga Israel Self Defense" 
            className="h-72 w-auto object-contain"
          />
        </div>
        
        <h3 className="text-xl font-semibold">BASES DE LA CONVOCATORIA</h3>
        <p>Se convoca el curso para obtener la titulación oficial de entrenador de KRAV MAGA.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold mb-2">1- REQUISITOS:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tener el Cinturón Negro 1º Dan de la Especialidad *</li>
            <li>Estar en posesión de la Licencia federativa anual.</li>
          </ul>
          <p className="mt-2">
            La totalidad del curso facilita la obtención del Cinturón Negro 1º dan en caso de que no 
            se posea siempre y cuando se cumplan los requisitos legales y se superen las evaluaciones establecidas.
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold mb-2">2.- FECHAS:</h4>
          <p>El curso se celebrará en varias fases de fin de semana (Sábado y Domingo) a lo largo del año 2022 y principios del 2023.</p>
          
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-2 pr-4">Enero 2022:</td>
                  <td className="py-2 pr-4">Sábado 22</td>
                  <td className="py-2">Selección de alumnos.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Febrero 2022:</td>
                  <td className="py-2 pr-4">19 y 20</td>
                  <td className="py-2">Cinturón Amarillo y Naranja</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Mayo 2022:</td>
                  <td className="py-2 pr-4">a determinar.</td>
                  <td className="py-2">Cinturón Verde</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Junio 2022:</td>
                  <td className="py-2 pr-4">a determinar.</td>
                  <td className="py-2">Cinturón Azul</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Octubre/Noviembre:</td>
                  <td className="py-2 pr-4">a determinar.</td>
                  <td className="py-2">Cinturón Marrón</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Primer Trimestre 2023:</td>
                  <td className="py-2 pr-4">a determinar.</td>
                  <td className="py-2">Cinturón Negro 1º Dan</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Primer Trimestre 2023:</td>
                  <td className="py-2 pr-4">a determinar.</td>
                  <td className="py-2">
                    Legislación Deportiva<br />
                    Funcionamiento Federativo<br />
                    Aspectos legales.<br />
                    Historia, principios y filosofía del K.M.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">Para pasar de fase (cinturón), se deberá demostrar el dominio de programa y conocimientos adquiridos en el curso anterior.</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold mb-2">3.- PRECIOS</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Precio Curso Cinturón Amarillo, Naranja y precio curso Cinturón Verde: 30 eur</li>
            <li>Precio Curso Cinturón Azul: 40 eur</li>
            <li>Precio Curso Cinturón Marrón: 50 eur</li>
          </ul>
          <p className="mt-2">
            Estos precios se corresponden con las titulaciones oficiales de Especialista en Combate Cuerpo a Cuerpo 
            Nivel I (Básico), Nivel II (Superior) y Nivel III (Técnico) que el alumnos obtendrá previa superación 
            de las evaluaciones correspondientes.
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold mb-2">4.- FASES DEL CURSO:</h4>
          
          <h5 className="font-semibold mt-2">4.1. FASE SELECCIÓN ALUMNOS:</h5>
          <p className="mt-1">
            El día 22 de Enero de 2022 a las 16 h en Oviedo (se comunicará a los pre-seleccionados el lugar exacto) 
            tendrá lugar una selección en base a los siguientes requisitos:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              Estar en posesión de un Cinturón Negro de cualquiera de las artes marciales y deportes de combate 
              reconocidas por el Consejo Superior de Deportes.
            </li>
            <li>Demostración práctica de habilidades relacionadas con la materia que se va a impartir.</li>
          </ul>
          <p className="mt-2">
            Para ello los interesados deberán enviar un curriculum profesional y deportivo a la dirección 
            formacion@defensapolicial.es antes del 15 de Enero de 2022 comunicando que están interesados en 
            participar en la fase de selección para el curso de Entrenador de Krav Maga. Una vez recibido el 
            curriculum en caso de ser seleccionado se le citará para la FASE DE SELECCIÓN concreta que tendrá 
            lugar el Sábado 22 de Enero.
          </p>
          
          <h5 className="font-semibold mt-4">4.2 FASE FORMATIVA</h5>
          <p className="mt-1">La fase formativa tendrá lugar a lo largo del año 2022 y primer trimestre de 2023.</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold mb-2">5.-TITULACIÓN:</h4>
          <p>
            Los alumnos que superen las fases establecidas y dominen el programa obtendrán el TÍTULO OFICIAL 
            de Entrenador de Krav Maga expedido por la Federación de Lucha (recordamos ÚNICO estamento oficial 
            para el desarrollo de la disciplina, otorgar grados y cinturones y formación de entrenadores)
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold mb-2">6.- ASPECTOS LEGALES:</h4>
          <p className="mb-2">
            La enseñanza deportiva, sea cual fuere la disciplina es una actividad reglada PROFESIONAL, 
            lo que implica que cualquier persona que imparta una actividad deportiva (en este caso KRAV MAGA) 
            debe estar TITULADO Y COLEGIADO como indica la legislación en todos los casos.
          </p>
          <p className="mb-2">
            La disciplina KRAV MAGA es una actividad deportiva cuyo desarrollo es potestad UNICA Y EXCLUSIVAMENTE 
            de la FEDERACIÓN ESPAÑOLA DE LUCHA recogido esto en la Resolución de 26 de Abril de 2018 de la 
            Presidencia del Consejo Superior de Deportes que modifica los estatutos de la Federación Española de 
            Lucha Olímpicas y Disciplinas Asociadas, publicada en el BOLETÍN OFICIAL DEL ESTADO nº 117 de fecha 
            14 de Mayo de 2018.
          </p>
          <p className="mb-2">
            Asimismo el artículo 55 del Título IV de la Ley 2/1994 de 29 de Diciembre del Deporte del Principado 
            de Asturias, recoge que para la realización de actividades de enseñanza y entrenamiento de carácter 
            deportivo, en el ámbito de la Comunidad Autónoma del Principado de Asturias, se exigirá estar en 
            posesión de la correspondiente titulación deportiva oficial, como es el caso de los profesores de KRAV MAGA.
          </p>
          <p className="mb-2">
            Art. 9.1 a) del Capítulo III del Decreto 29/2003 de 30 de Abril publicado en el BOLETÍN OFICIAL DEL 
            PRINCIPADO DE ASTURIAS nº 108 de Lunes 12 de Mayo de 2003.
          </p>
          <p>
            Art 39, Capítulo III del Título IV de la Ley 2/ 1994 de 29 de Diciembre del Deporte Asturiano BOPA nº 10.
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold mb-2">7.- INFORMACIÓN:</h4>
          <p>
            Para resolver cualquier tipo de duda, ampliar información etc contactar con el responsable de la 
            disciplina IVÁN RODRÍGUEZ en el tfn. 655478818
          </p>
          <p>O bien enviar un correo electrónico a la dirección formacion@defensapolicial.es</p>
        </div>
      </div>
    </CourseCard>
  );
};

export default ConvocatoriaCursoEntrenadorKravMagaCourse;
