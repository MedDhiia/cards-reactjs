import "./Cards.css";
import { Badge, Col, Card, Button } from "react-bootstrap";

function Cards(props) {
  return (
    <Col>
      <Card className="card-persona">
        <div className="wrapper">
          <Card.Img variant="top" src={props.person.avatar} />
          <Card.Body>
            <Card.Title className="fullname">
              {props.person.fullName}
            </Card.Title>
            <Card.Title className="age">
              Age : {props.person.age} ans
            </Card.Title>
            <Card.Text className="content">
              {props.person.hobbies.map((h) => (
                <Badge bg="secondary">{h}</Badge>
              ))}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="footer">
            <div className="buttons">
              <Button variant="light" className="btn">
                Edit
              </Button>
              <Button variant="light" className="btn">
                Delete
              </Button>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </Col>
  );
}

export default Cards;
