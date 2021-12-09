import { useState, useEffect } from "react";
import Personas from "./Components/Personas/Personas";
import "./App.css";
import { fetchPersonas } from "./Services/personas.service";
import { Spinner } from "react-bootstrap";

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
      <div className="container">
        {isLoading && !isError && (
          <Spinner className="loading" animation="border" />
        )}
        {!isLoading && !isError && isVisible && (
          <>
            <Personas personas={personas} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
