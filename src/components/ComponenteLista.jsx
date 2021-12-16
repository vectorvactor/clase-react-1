import React from 'react';

import './componente-lista.css';

export default function ComponenteLista(props) {
  let claseLista = '';
  setElementClass();
  function setElementClass() {
    props.prioridad;
    if (props.done) {
      claseLista += ' el-done';
    } else {
      claseLista += ' el-undone';
    }
  }

  function setTaskStatus() {
    props.done = !props.done;
    setElementClass();
  }

  return (
    <li className={claseLista}>
      <input type="checkbox" onChange={setTaskStatus} />
      {props.texto}
    </li>
  );
}

ComponenteLista.defaultProps = {
  prioridad: 'baja',
};
