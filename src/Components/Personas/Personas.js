import "./Personas.css";
import Cards from "../Cards/Cards";

function Personas(props) {
  return props.personas.map((p, index) => <Cards key={index} person={p} />);
}

export default Personas;
