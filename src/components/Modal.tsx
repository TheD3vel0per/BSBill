import React from "react";
import Button from 'react-bootstrap/Button';
import {
  MDBBtn, MDBContainer, MDBBtnGroup, MDBModal, MDBModalFooter, MDBModalBody, MDBModalHeader, MDBTooltip, MDBPopover,
  MDBPopoverHeader, MDBPopoverBody
} from "mdbreact";
import Modal from 'react-bootstrap/Modal'
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import "./Modal.css"
import Form from 'react-bootstrap/Form';
import { mergeAll, filter, take } from 'rxjs/operators';
import Bill from "../model/Bill";
import { Link } from 'react-router-dom';



const ModalComponent = () => {

  const [val, setVal] = React.useState("");
  const [data, setData] = React.useState("")
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  const pushToEndpoint = async (url: String) => {
    const response = await fetch('http://143.110.236.90:8080/api/bill?url=' + url, {
      method: 'POST',
      body: JSON.stringify({
        firstParam: url,
      })
    })
    const json = await response.json();
    setData(json);

    // @ts-ignore
    const billService: BillService = window['bsbills']['billService'] as BillService;
    const id = JSON.stringify(data) == "{}" ? (await billService.bills$.pipe(
      mergeAll(),
      filter((b: any) => b.billUrl == url),
      take(1)
    ))._id : json._id;

    console.log(id);

    if (JSON.stringify(data) == "{}" && (id != "undefined" || id != undefined)) {
      setShow(false);
      const link = "/document/" + id;
      window.location.href = link;
    }

  }

  return (
    <>
      <Button size="lg" variant="primary" onClick={handleShow}>
        Click here to ADD
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
              <Form.Control
                type="URL"
                placeholder="Enter URL"
                onChange={e => setVal(e.target.value)}
              />
              <Form.Text className="text-muted">
                Yout URL requests will remain private.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => pushToEndpoint(val)}>
            Upload to NLP Model
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;