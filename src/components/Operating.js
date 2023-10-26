import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function Operating({operatingData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
     <Button variant="white" className='w-50 p-2' onClick={handleShow}>
       <span className='fs-5 text-danger'>Operating hours </span> 
      </Button>

      <Modal className='fs-4'show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Operating hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday <span className='text-danger'> {operatingData.Monday}</span></ListGroup.Item>
      <ListGroup.Item>Tuesday <span className='text-danger'> {operatingData.Tuesday}</span></ListGroup.Item>
      <ListGroup.Item>Wednesday <span className='text-danger'> {operatingData.Wednesday}</span></ListGroup.Item>
      <ListGroup.Item>Thursday <span className='text-danger'> {operatingData.Thursday}</span></ListGroup.Item>
      <ListGroup.Item>Friday<span className='text-danger'> {operatingData.Friday}</span></ListGroup.Item>
      <ListGroup.Item>Saturday<span className='text-danger'> {operatingData.Saturday}</span></ListGroup.Item>
      <ListGroup.Item>Sunday<span className='text-danger'> {operatingData.Sunday}</span></ListGroup.Item>

    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button className='w-25'variant="danger" onClick={handleClose}>
            <b>close</b>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Operating