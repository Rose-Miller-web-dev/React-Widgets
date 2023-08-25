import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Popup() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <>
      <Button variant="success" onClick={handleShow}>
        Popup!
      </Button>

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>I just popped up!!</Modal.Body>
        
      </Modal>
    </>

        )
    
}