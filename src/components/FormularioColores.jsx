import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  const [codigoColor, setCodigoColor] = useState("");
  const coloresLocalStorage =
    JSON.parse(localStorage.getItem("keyColores")) || [];
  const [coloresAgregados, setColoresAgregados] = useState(coloresLocalStorage);
  useEffect(() => {
    localStorage.setItem("keyColores", JSON.stringify(coloresAgregados));
  }, [coloresAgregados]);

  function handleSubmit(e) {
    e.preventDefault();
    setColoresAgregados([...coloresAgregados, codigoColor]);
    setCodigoColor("");
    console.log("todo va correcto!");
  }

  function borrarColor(color) {
    const coloresFiltrados = coloresAgregados.filter(
      (elemento) => elemento !== color
    );
    setColoresAgregados(coloresFiltrados);
  }

  return (
    <>
      <section className="d-flex align-items-center mb-5 formularioPrincipal">
        <div>
          <img
            className="img-fluid imgFormulario"
            src="/img/mochila.png"
          />
        </div>
        <Form className="formularioColores px-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Introduzca un color por código hexadecimal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Por ej: #edc56b"
              minLength={7}
              maxLength={7}
              onChange={(e) => setCodigoColor(e.target.value)}
              value={codigoColor}
            />
            <Form.Text className="text-muted">
              Recordá anteponer "#" al código que introduzcas
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            ✨Guardar en el bolso✨
          </Button>
        </Form>
      </section>
      <ListaColores
        coloresAgregadosProps={coloresAgregados}
        borrarColorProps={borrarColor}
      ></ListaColores>
    </>
  );
};

export default FormularioColores;
