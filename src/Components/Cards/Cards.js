import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cards() {
  return (
    <div className="card">
      <div className="wrapper">
        <img
          src="//toppng.com/uploads/preview/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png"
          alt=""
        />
        <div className="fullname">Andrew Neil</div>
        <div className="age">Surkhet, Nepal</div>
      </div>
      <div className="content">
        <p>
          User Interface Designer and <br></br>
          front-end developer
        </p>
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
