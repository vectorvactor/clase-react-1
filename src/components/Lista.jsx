import React from 'react';
import ComponenteLista from './ComponenteLista';
export function Lista(props) {
  const listaComponentes = [];
  for (let i = 0; i < props.elementos.length; i++) {
    listaComponentes.push(<ComponenteLista texto="hola" />);
  }
  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>
        <ComponenteLista texto="Elemento 1" />
        <ComponenteLista texto="Elemento 2" />
        <ComponenteLista texto="Elemento 3" />
        {listaComponentes}
      </ul>
    </div>
  );
}
