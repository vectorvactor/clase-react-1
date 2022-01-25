import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaCoches, DatosTablaCoches } from '../data/DatosCoches';
import './coches.css';

class Coches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: DatosTablaCoches[0] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <div className="main-site">
        <h1>Coches</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>{TitulosTablaCoches.id}</th>
                    <th>{TitulosTablaCoches.field1}</th>
                    <th>{TitulosTablaCoches.field2}</th>
                    <th>{TitulosTablaCoches.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaCoches.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.matricula}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.color}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.imagen} />
                <Card.Body>
                  <Card.Title>
                    {this.state.selectedItem.marca}{' '}
                    {this.state.selectedItem.modelo}
                  </Card.Title>
                  <Card.Text>
                    Matrícula: {this.state.selectedItem.matricula}
                    <p />
                    {this.state.selectedItem.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Coches;
