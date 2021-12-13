import React from 'react';

import { ComponenteEj } from './components/ComponenteEj';

export function App() {
  return (
    <div>
      <h1>Hola (desde componente)</h1>
      <ComponenteEj icono=":)" />
      <ComponenteEj icono=":(" />
      <ComponenteEj icono=":*" />
      <ComponenteEj icono=";)" />
    </div>
  );
}
