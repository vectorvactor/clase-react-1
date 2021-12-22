import React, { useState } from 'react';

import './componente-lista.css';

export default function ComponenteLista(props) {
  let claseLista = '';

  const [done, setDone] = useState(props.done);

  setElementClass();
  function setElementClass() {
    claseLista = props.prioridad;
    if (done) {
      claseLista += ' el-done';
    } else {
      claseLista += ' el-undone';
    }
  }

  function changeStatus() {
    setDone(!done);
  }

  return (
    <li className={claseLista}>
      <input type="checkbox" defaultChecked={done} onChange={changeStatus} />
      {props.texto}
    </li>
  );
}

ComponenteLista.defaultProps = {
  prioridad: 'baja',
  done: false,
};
