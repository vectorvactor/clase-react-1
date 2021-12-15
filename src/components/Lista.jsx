import React from 'react';
import ComponenteLista from './ComponenteLista';
export function Lista(props) {
  const listaComponentes = [];

  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaComponentes.push(
        <ComponenteLista done={false} texto={props.elementos[i]} />
      );
    }
  }

  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>{listaComponentes}</ul>
    </div>
  );
}
