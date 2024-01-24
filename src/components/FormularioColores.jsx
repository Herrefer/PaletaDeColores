import { Button, Form } from "react-bootstrap";

const FormularioColores = () => {
  return (
    <section className="d-flex align-items-center">
      <div>
        <img className="img-fluid imgFormulario" src="../../img/colores.jpg" alt="varios colores" />
      </div>
      <Form className="formularioColores px-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Introduzca un color</Form.Label>
          <Form.Control
            type="email"
            placeholder="Por ej: celeste, morado, rojo, etc"
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
