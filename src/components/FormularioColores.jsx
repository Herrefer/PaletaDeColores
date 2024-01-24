import { Button, Form } from "react-bootstrap";

const FormularioColores = () => {
  return (
    <section className="d-flex align-items-center mb-5">
      <div>
        <img className="img-fluid imgFormulario" src="../../img/colores.jpg" alt="varios colores" />
      </div>
      <Form className="formularioColores px-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Introduzca un color por código hexadecimal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por ej: #edc56b"
            minLength={7}
            maxLength={7}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          ✨Guardar en el bolso✨
        </Button>
      </Form>
    </section>
  );
};

export default FormularioColores;
