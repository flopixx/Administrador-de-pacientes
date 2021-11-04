import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Formulario/Form";
import Cita from "./components/Cita/Cita";

function App() {
  // arreglo de citas

  // localstorage

  let citasiniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasiniciales) {
    citasiniciales = [];
  }
  const [citaa, guardarcita] = useState([]);
  // useefect para realixar operaciiones cuando el state cambie
  useEffect(() => {
    if (citasiniciales) {
      localStorage.setItem("citas", JSON.stringify(citaa));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citaa]);

  // funcion que tome las citas actuales y agrege la nueva
  const crearCita = (cita) => {
    guardarcita([...citaa, cita]);
  };
  // funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevascitas = citaa.filter((cita) => cita.id !== id);
    guardarcita(nuevascitas);
  };
  const titulo = citaa.length === 0 ? "No hay turnos " : "Administrar turnos";
  return (
    <>
      <div className="containerr">
        <h1>Administrador de pacientes</h1>
      </div>
      <div className="container">
        <div className="one-half column">
          <Form crearCita={crearCita} />
        </div>
        <div className="two-half column">
          <h2>{titulo}</h2>
          {citaa.map((cita) => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
      <p className="desarrollado">
        Desarrollado por Florencia Velazquez <span>🌈✨</span>{" "}
      </p>
    </>
  );
}

export default App;
