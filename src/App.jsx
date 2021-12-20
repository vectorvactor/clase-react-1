import React from 'react';

import { Lista } from './components/Lista';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Hacer la compra', prioridad: 'alta' },
    { done: true, texto: 'Sacar al perro', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Tomates' },
    { done: true, texto: 'Queso' },
    { done: false, texto: 'Leche' },
  ];
  const elementos3 = [{ done: false, texto: 'Estudiar React.js' }];

  return (
    <div>
      <h1>Listas de tareas</h1>
      <Lista titulo="Tareas de la casa" icono="♥" elementos={elementos1} />
      <Lista titulo="Lista de la compra" icono="✌" elementos={elementos2} />
      <Lista titulo="ToDos del curso" icono="🙌" elementos={elementos3} />
    </div>
  );
}
