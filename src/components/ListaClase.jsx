import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.icono = props.icono;
    this.state = {
      listaComponentes: this.initList(props.elementos),
    };
    this.valorTextInput = React.createRef();
    this.valorPrioritySelect = React.createRef();
  }

  initList(elementos) {
    const listaInicial = [];
    for (let i = 0; i < elementos.length; i++) {
      listaInicial.push(
        <ComponenteListaClase
          done={elementos[i].done}
          texto={elementos[i].texto}
          prioridad={elementos[i].prioridad}
        />
      );
    }
    return listaInicial;
  }

  addElement() {
    const newLista = this.state.listaComponentes.concat(
      <ComponenteListaClase
        texto={this.valorTextInput.current.value}
        prioridad={this.valorPrioritySelect.current.value}
      />
    );
    this.setState({ listaComponentes: newLista });
  }

  render() {
    return (
      <div>
        {this.titulo} - {this.icono}
        <ul>
          {this.state.listaComponentes}
          <li>
            <input
              ref={this.valorTextInput}
              type="text"
              placeholder="Introduce una tarea"
            />
            <br />
            <select ref={this.valorPrioritySelect}>
              <option value="alta">Prioridad Alta</option>
              <option value="media">Prioridad Media</option>
              <option value="baja">Prioridad Baja</option>
            </select>
            <button onClick={this.addElement.bind(this)}>Añadir</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListaClase;
