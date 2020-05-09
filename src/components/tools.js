import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal } from 'react-bootstrap';
import '../App.css';

function Tools({addTodo}) {
    const [value, setValue] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function handleSave(){
      addTodo(value);
      setShow(false);
    } 
    return (
      <Form>
          <h1>PsaGraph</h1>
          <Button className="mb-2" onClick={handleShow}>Agregar paciente</Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    type="text"
                    className="input mb-2"
                    value={value}
                    onChange={e => setValue(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>handleSave()}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
      </Form>

    );
}

export default Tools;
