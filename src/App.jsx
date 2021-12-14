import React from 'react';

import { Lista } from './components/Lista';

export function App() {
  const elementos1 = ['Elemento (Comp) 1', 'Elemento (Comp) 2'];

  return (
    <div>
      <h1>Hola (desde componente)</h1>
      <Lista titulo="Componente 1" icono=":(" elementos={elementos1} />
      <Lista titulo="Componente 2" icono=":*" />
      <Lista titulo="Componente 3" icono=";)" />
    </div>
  );
}
