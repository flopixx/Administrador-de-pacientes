import React from "react";

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="citas">
      <p>
        Paciente:<span>{cita.paciente}</span>{" "}
      </p>
      <p>
        {" "}
        Apellido Paciente:<span>{cita.pacienteapellido}</span>{" "}
      </p>
      <p>
        Fecha:<span>{cita.fecha}</span>{" "}
      </p>
      <p>
        Hora:<span>{cita.hora}</span>{" "}
      </p>
      <p>
        Sintomas:<span>{cita.sintomas}</span>{" "}
      </p>
      <button onClick={() => eliminarCita(cita.id)} className="eliminar">
        &times;
      </button>
    </div>
  );
};

export default Cita;
