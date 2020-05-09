import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import AddPatient from './components/add_patient.js';
import {
  Switch,
  Route
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

              <Route path="/tittle">
                <Tittle/>
              </Route>
              <Route path="/">
                  <AddPatient/>
              </Route>

            </Switch>
          </Col>
          <Col></Col>
        </Row>
      </Container>

    </div>
  );
}

function Tittle(){
  return <h1>HEY ROUTE TEST</h1> 
}
export default App;
