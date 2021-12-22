import React, { useState, useRef } from 'react';
import ComponenteLista from './ComponenteLista';
export default function Lista(props) {
  const listaInicial = [];
  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaInicial.push(
        <ComponenteLista
          done={props.elementos[i].done}
          texto={props.elementos[i].texto}
          prioridad={props.elementos[i].prioridad}
        />
      );
    }
  }

  const [listaComponentes, setListaComponentes] = useState(listaInicial);
  const valorTextInput = useRef('');
  const valorPrioritySelect = useRef('');

  const funcion = function addElement() {
    const newLista = listaComponentes.concat(
      <ComponenteLista
        texto={valorTextInput.current.value}
        prioridad={valorPrioritySelect.current.value}
      />
    );
    setListaComponentes(newLista);
  };

  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>
        {listaComponentes}
        <li>
          <input
            ref={valorTextInput}
            type="text"
            placeholder="Introduce una tarea"
          />
          <br />
          <select ref={valorPrioritySelect}>
            <option value="alta">Prioridad Alta</option>
            <option value="media">Prioridad Media</option>
            <option value="baja">Prioridad Baja</option>
          </select>
          <button onClick={funcion}>Añadir</button>
        </li>
      </ul>
    </div>
  );
}
