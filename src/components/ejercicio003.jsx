import { useState } from "react";

export const Ejercicio003 = () => {

    const [numerito,setNumerito]= useState(0)
    const sumar= ()=>{
        setNumerito(numerito+1)
    }

    const restar=() =>{
        setNumerito(numerito-1)
    }
    const reiniciar=() =>{
        setNumerito(0)
    }

  return (
    <div>
      <div className="row mt-4">
        <div className="col-12">
          <h2 className="h4 mt-4">
            funciones
          </h2>
        </div>
      </div>
      <div className="col-12 text-center">
        <p className="h1">
          {numerito}
        </p>
      </div>
      <div className="col-12">
        <button onClick={sumar} className="w-25 btn btn-primary">Subir</button>
      </div>

    <div className="col-12 ">
        <button onClick={restar} className="w-25 btn btn-danger">Restar</button>
      </div>

      <div className="col-12">
        <button onClick={reiniciar} className="w-25 btn btn-success">Reiniciar</button>
      </div>

    </div>

    
  );
};
