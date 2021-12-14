import React from 'react';

import { ComponenteEj } from './components/ComponenteEj';

export function App() {
  return (
    <div>
      <h1>Hola (desde componente)</h1>
      <ComponenteEj titulo="Componente 1" icono=":(" />
      <ComponenteEj titulo="Componente 2" icono=":*" />
      <ComponenteEj titulo="Componente 3" icono=";)" />
    </div>
  );
}
