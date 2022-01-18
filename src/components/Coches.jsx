import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaCoches, DatosTablaCoches } from '../data/DatosCoches';
class Coches extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-site">
        <h1>Coches</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
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
                      <tr>
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
                <Card.Img variant="top" src={DatosTablaCoches[2].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaCoches[2].marca} {DatosTablaCoches[2].modelo}
                  </Card.Title>
                  <Card.Text>
                    Matrícula: {DatosTablaCoches[2].matricula}
                    <p />
                    {DatosTablaCoches[2].descripción}
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
