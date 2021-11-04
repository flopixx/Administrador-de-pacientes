import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ crearCita }) => {
  const [citas, actualizarcitas] = useState({
    paciente: "",
    pacienteapellido: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, seterror] = useState(false);
  const actualizarValor = (e) => {
    actualizarcitas({
      ...citas,
      [e.target.name]: e.target.value,
    });
  };

  // extrae valores
  const { paciente, pacienteapellido, fecha, hora, sintomas } = citas;

  const agregarcita = (e) => {
    e.preventDefault();
    //validar
    if (
      paciente.trim() === "" ||
      pacienteapellido.trim() === "  " ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      seterror(true);
      return;
    }
    seterror(false);
    // asignar un id
    citas.id = uuidv4();
    console.log(citas);
    // crear cita
    crearCita(citas);
    //reiniciar el form
    actualizarcitas({
      paciente: "",
      pacienteapellido: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  return (
    <>
      <h2>Crear turno</h2>
      {error ? (
        <div className="error">
          <p>Todos los campos son obligatorios</p>{" "}
        </div>
      ) : null}
      <form onSubmit={agregarcita}>
        <label>Nombre paciente:</label>
        <input
          type="text"
          name="paciente"
          className="inputpaciente"
          placeholder="Nombre paciente"
          onChange={actualizarValor}
          value={paciente}
        />
        <label>Apellido paciente:</label>
        <input
          type="text"
          name="pacienteapellido"
          className="inputpaciente"
          placeholder="Apellido paciente"
          onChange={actualizarValor}
          value={pacienteapellido}
        />
        <label>Fecha:</label>
        <input
          type="date"
          name="fecha"
          className="inputpaciente"
          onChange={actualizarValor}
          value={fecha}
        />
        <label>Hora:</label>
        <input
          type="time"
          name="hora"
          className="inputpaciente"
          onChange={actualizarValor}
          value={hora}
        />
        <label>Sintomas:</label>
        <textarea
          className="textarea"
          name="sintomas"
          onChange={actualizarValor}
          value={sintomas}
        ></textarea>
        <button type="submit" className="cita">
          Agregar cita
        </button>
      </form>
    </>
  );
};

export default Form;
