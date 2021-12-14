import React from 'react';
import ComponenteLista from './ComponenteLista';
export function ComponenteEj(props) {
  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>
        <ComponenteLista texto="Elemento 1" />
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
    </div>
  );
}
