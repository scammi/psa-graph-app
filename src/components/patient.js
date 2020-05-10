import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import '../App.css';

function Patient() {
    let { patient } = useParams();

    return (
        <h1> {patient}</h1> 
    );
}

export default Patient;
