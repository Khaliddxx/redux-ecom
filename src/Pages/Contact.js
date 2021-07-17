import React from "react";
import { useState } from "react";
import { Form, Modal, Button, Container } from "react-bootstrap";

const Contact = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="col-12 text-center">
        <Button
          style={{
            marginTop: "20px",
            marginBottom: "50px",
          }}
          onClick={handleShow}
        >
          Send A message
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcame Welcame</Modal.Body>

        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter Your Name"
                // value={newMovie.name}
                // onChange={(e) =>
                //   setNewMovie((prev) => {
                //     prev.name = e.target.value;
                //     return { ...prev };
                //   })
                // }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                placeholder="Enter your message"
                // value={newMovie.description}
                // onChange={(e) =>
                //   setNewMovie((prev) => {
                //     prev.description = e.target.value;
                //     return { ...prev };
                //   })
                // }
              />
            </Form.Group>
          </Form>
        </Container>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="add-movie-btn"
            variant="primary"
            onClick={() => {
              //   onAdd((prev) => {
              //     prev.push({
              //       title: newMovie.name,
              //       description: newMovie.description,
              //       posterURL: newMovie.poster,
              //       rating: newMovie.rating,
              //     });
              //     return [...prev];
              //   });
              handleClose();
            }}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
