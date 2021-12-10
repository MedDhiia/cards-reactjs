import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";

function Cards(props) {
  return (
    <div className="card-persona">
      <div className="wrapper">
        <img src={props.person.avatar} alt="" />
        <div className="fullname">{props.person.fullName}</div>
        <div className="age">Age : {props.person.age} ans</div>
      </div>
      <div className="content">
        {props.person.hobbies.map((h) => (
          <Badge bg="secondary">{h}</Badge>
        ))}
        <div className="buttons">
          <div className="btn">
            <button>Edit</button>
          </div>
          <div className="btn">
            <button>Delete</button>
          </div>
        </div>
      </div>
      {/* <div class="icons">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={["fas", "facebook"]} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={["fas", "twitter"]} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={["fas", "instagram"]} />
          </a>
        </li>
      </div> */}
    </div>
  );
}

export default Cards;
