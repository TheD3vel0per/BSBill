import React from "react";
import Button from 'react-bootstrap/Button';
import {
  MDBBtn, MDBContainer, MDBBtnGroup, MDBModal, MDBModalFooter, MDBModalBody, MDBModalHeader, MDBTooltip, MDBPopover,
  MDBPopoverHeader, MDBPopoverBody
} from "mdbreact";
import Modal from 'react-bootstrap/Modal'
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import "./Modal.css"
import Form from 'react-bootstrap/Form'

const ModalComponent = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload your URL</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <div className="testDiv">
              <i className="fa fa-info-circle"></i>            
          </div>

          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="URL" placeholder="Enter URL" />
    <Form.Text className="text-muted">
      We'll never share your URL requests with anyone else.
    </Form.Text>
  </Form.Group>
  </Form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload to NLP Model
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;