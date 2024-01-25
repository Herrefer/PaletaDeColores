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
            src="data:image/jpeg;base64,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"
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
