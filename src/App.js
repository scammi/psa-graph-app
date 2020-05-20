import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import PatientIndex from './components/patient_index.js';
import Patient from './components/patient.js';
import {
  Switch,
  Route,
} from 'react-router-dom'; 
import './App.css';


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={6} className="text-center">  

          <Switch>
              <Route path="/tittle/:patient_id">
                <Patient/>
              </Route>
              <Route path="/">
                  <PatientIndex/>
              </Route>
            </Switch>

          </Col>
          <Col></Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
