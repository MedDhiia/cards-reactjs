import "./Forms.css";
import { useState } from "react";
import { Col, Card, Form, Button, Row } from "react-bootstrap";
import { addPersona } from "../../../Services/personas.service";

function Forms(props) {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [avatar, setAvatar] = useState(
    "//www.pngitem.com/pimgs/m/78-785936_profile-male-persona-profile-male-user-avatar-persona.png"
  );
  const [hobbies, setHobbies] = useState([]);

  const handleAddPersona = () => {
    props.addNewPersona({ fullName, age, avatar, hobbies });
  };

  return (
    <>
      <Col>
        <Card className="card-persona">
          <div className="wrapper">
            <Card.Img
              variant="top"
              src="//png.pngtree.com/png-vector/20190927/ourmid/pngtree-increase-or-add-users-icon-on-gray-background-png-image_1758496.jpg"
            />
            <Card.Body>
              <Form>
                <Form.Group controlId="formFileDisabled" className="mb-3">
                  <Form.Control type="file" disabled />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Age"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form>
            </Card.Body>
            <Card.Footer className="footer">
              <div className="buttons">
                <Button
                  type="button"
                  variant="light"
                  className="btn"
                  onClick={handleAddPersona}
                >
                  Submit
                </Button>
                <Button variant="light" className="btn">
                  Clear
                </Button>
              </div>
            </Card.Footer>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default Forms;
