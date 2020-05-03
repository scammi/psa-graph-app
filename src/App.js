import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import AddPatient from './components/add_patient.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={6} className="text-center">
            <h1>PsaGraph</h1>
            <row className="justify-content-md-center">
              <AddPatient/>
            </row>
          </Col>
          <Col></Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
