import "./App.css";
import { useState, useEffect } from "react";
import { Spinner, Container, Row } from "react-bootstrap";
import { fetchPersonas } from "./Services/personas.service";
import Personas from "./Components/Personas/Personas";
import Forms from "./Components/Cards/Forms/Forms";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [personas, setPersonas] = useState([]);

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
  }, []);

  return (
    <div className="App">
      <Container>
        {isLoading && !isError && (
          <Spinner className="loading" animation="border" />
        )}
        {!isLoading && !isError && isVisible && (
          <>
            <Row>
              <Forms />
              <Personas personas={personas} />
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
