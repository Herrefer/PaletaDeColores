import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import FormularioColores from "./components/FormularioColores";

function App() {
  return (
    <>
      <Container className="text-center my-3">
        <h1>Bolso mágico de colores</h1>
      </Container>
      <Container>
        <FormularioColores></FormularioColores>
      </Container>
    </>
  );
}

export default App;
