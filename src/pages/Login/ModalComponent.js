import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import './Modal.scss'

export default function ModalComponent() {
  //   const [modalShow, setModalShow] = useState(false);
  return (
    // <div>
<div className="modal">
      <p>Sign Successful. Kindly check your email to verify your account</p>
  
      {/* <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
          //    onClick={setModalShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    {/* // </div> */}
</div>
  );
}
