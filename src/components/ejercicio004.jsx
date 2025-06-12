import { useState } from "react";

export const EjercicioSaludo = () => {
  const [mensaje, setMensaje] = useState("Esperando acción...");

  const saludar = () => {
    setMensaje("¡Hola, José! Bienvenido 👋");
  };

  const despedir = () => {
    setMensaje("¡Hasta luego, José! 👋");
  };

  const reiniciar = () => {
    setMensaje("Esperando acción...");
  };

  return (
    <div>
      <div className="row mt-4">
        <div className="col-12">
          <h2 className="h4 mt-4">Mensajes</h2>
        </div>
      </div>

      <div className="col-12 text-center">
        <p className="h3">{mensaje}</p>
      </div>

      <div className="col-12 mb-2">
        <button onClick={saludar} className="w-25 btn btn-primary">
          Saludar
        </button>
      </div>

      <div className="col-12 mb-2">
        <button onClick={despedir} className="w-25 btn btn-danger">
          Despedir
        </button>
      </div>

      <div className="col-12">
        <button onClick={reiniciar} className="w-25 btn btn-secondary">
          Reiniciar
        </button>
      </div>
    </div>
  );
};
