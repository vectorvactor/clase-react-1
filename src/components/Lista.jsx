import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';
export function Lista(props) {
  const listaComponentes = [];

  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaComponentes.push(
        <ComponenteListaClase
          done={props.elementos[i].done}
          texto={props.elementos[i].texto}
          prioridad={props.elementos[i].prioridad}
        />
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
