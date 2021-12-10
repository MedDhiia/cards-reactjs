import "./Forms.css";
import { Col, Card, Form, Button } from "react-bootstrap";

function Forms(props) {
  return (
    <>
      <Col>
        <Card className="card-persona">
          <div className="wrapper">
            <Card.Img
              variant="top"
              src="//png.pngtree.com/png-vector/20190927/ourmid/pngtree-increase-or-add-users-icon-on-gray-background-png-image_1758496.jpg"
            />
          </div>
        </Card>
      </Col>
    </>
  );
}

export default Forms;
