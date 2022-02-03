import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';

import './table.css';

class RugbyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      selectedCountry: '',
      selectedArena: '',
      tableData: [],
    };
  }

  changeSelected = (item) => {
    this.setState({
      selectedItem: item,
      selectedArena: item.arena,
      selectedCountry: item.country,
    });
  };

  async componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append('x-rapidapi-key', '9c61626a1d34b0c21209d76da3e22cb5');
    myHeaders.append('x-rapidapi-host', 'v1.rugby.api-sports.io');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(
      'https://v1.rugby.api-sports.io/teams?league=12&season=2021',
      requestOptions
    );
    const responseData = await response.json();

    this.setState({
      tableData: responseData.response,
      selectedItem: responseData.response[0],
      selectedArena: responseData.response[0].arena,
      selectedCountry: responseData.response[0].country,
    });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Equipos de rugby </h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre del equipo</th>
                    <th>Estadio</th>
                    <th>Fundación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.arena.name}</td>
                        <td>{item.founded}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.logo} />
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.name}</Card.Title>
                  <Card.Text>
                    Estadio: {this.state.selectedArena.name}
                    <p />
                    Año de fundación: {this.state.selectedItem.founded}
                    <p />
                    País: {this.state.selectedCountry.name}
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

export default RugbyTable;
