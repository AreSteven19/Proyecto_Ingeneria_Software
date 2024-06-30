import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../Styles/Style.SubcomponenteCalendario.css";

const availableTimes = [
  "10:00 a.m",
  "11:00 a.m",
  "12:00 p.m",
  "13:00 p.m",
  "14:00 p.m",
  "15:00 p.m",
  "16:00 p.m",
  "17:00 p.m",
  "18:00 p.m",
  "19:00 p.m",
  "20:00 p.m",
  "21:00 p.m",
  "22:00 p.m",
];

const SubComponenteCalendario = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="ContainerCalendario">
      <div className="ContCalendario">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          locale="es-ES"
        />
      </div>
      {/* <p>Fecha seleccionada: {formatDate(selectedDate)}</p> */}

      <div className="horasServicio">
        {availableTimes.map((time, index) => (
          <div key={index} className="hora">
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubComponenteCalendario;
