import React from 'react';

import './componente-lista.css';

class ComponenteListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: props.done,
    };
    this.prioridad = props.prioridad;
    this.texto = props.texto;
  }

  setElementClass() {
    this.claseLista = this.prioridad;
    if (this.state.done) {
      this.claseLista += ' el-done';
    } else {
      this.claseLista += ' el-undone';
    }
  }

  changeStatus() {
    this.setState({ done: !this.state.done });
  }

  render() {
    this.setElementClass();
    return (
      <li className={this.claseLista}>
        <input
          type="checkbox"
          defaultChecked={this.state.done}
          onChange={this.changeStatus.bind(this)}
        />
        {this.texto}
      </li>
    );
  }
}

ComponenteListaClase.defaultProps = {
  prioridad: 'baja',
  done: false,
};

export default ComponenteListaClase;
