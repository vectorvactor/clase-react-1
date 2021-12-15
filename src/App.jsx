import React from 'react';

import { Lista } from './components/Lista';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Elemento (Comp 1)' },
    { done: true, texto: 'Elemento (Comp 2)' },
  ];
  const elementos2 = [
    { done: false, texto: 'Elemento (Comp 3)' },
    { done: true, texto: 'Elemento (Comp 4)' },
    { done: false, texto: 'Elemento (Comp 5)' },
  ];
  const elementos3 = [{ done: false, texto: 'Elemento (Comp 6)' }];

  return (
    <div>
      <h1>Hola (desde componente)</h1>
      <Lista titulo="Componente 1" icono=":(" elementos={elementos1} />
      <Lista titulo="Componente 2" icono=":*" elementos={elementos2} />
      <Lista titulo="Componente 3" icono=";)" elementos={elementos3} />
    </div>
  );
}
