import "./App.css";
import { useState, useEffect } from "react";
import { Spinner, Container, Row, CardGroup } from "react-bootstrap";
import {
  fetchPersonas,
  addPersona as addPersonaFromService,
} from "./Services/personas.service";
import Personas from "./Components/Personas/Personas";
import Forms from "./Components/Cards/Forms/Forms";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [personas, setPersonas] = useState([]);

  const addNewPersona = async (newPersona) => {
    try {
      setIsLoading(true);
      setPersonas([...personas, await addPersonaFromService(newPersona)]);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // (async () => setTasks(await fetchTasks()))();
    (async () => {
      setIsLoading(true);
      try {
        setPersonas(await fetchPersonas());
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsError(true);
        setIsLoading(false);
        setIsVisible(false);
      }
    })();
  }, [personas]);

  return (
    // <div className="App">
    <Container>
      {isLoading && !isError && (
        <Spinner className="loading" animation="border" />
      )}
      {!isLoading && !isError && isVisible && (
        <>
          <Row>
            <CardGroup>
              <Forms addNewPersona={addNewPersona} />
              <Personas personas={personas} />
            </CardGroup>
          </Row>
        </>
      )}
    </Container>
    // </div>
  );
}

export default App;
