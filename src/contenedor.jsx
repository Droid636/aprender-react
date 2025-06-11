import React from 'react';
import  {BotonIniciosesion}  from './utils/botonCC';// asegúrate que la ruta es correcta
import { BotonCrearCuenta } from './utils/botonIS';

export const ContenedorBotones = () => {
  return (
    <div className="container p-4 mt-5" style={{ backgroundColor: 'pink', borderRadius: '10px' }}>
      <BotonIniciosesion/>
      <BotonCrearCuenta/>
   
    </div>
  );
};
