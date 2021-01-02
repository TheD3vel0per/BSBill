import React from "react";
import Button from 'react-bootstrap/Button';
import { MDBBtn, MDBContainer, MDBBtnGroup, MDBModal, MDBModalFooter, MDBModalBody, MDBModalHeader } from "mdbreact";
import Modal from 'react-bootstrap/Modal'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
//import InfoCircle from 'react-bootstrap-icons';

const ModalComponent = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
  </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload your URL</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
          Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;