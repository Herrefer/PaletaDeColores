import { Button, Card, Form, Modal } from "react-bootstrap";
import { borrarColor, leerColores } from "../helpers/queries";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ColorGuardado = ({ color, setColores, colores, consultarBD }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const botonBorrarColor = async () => {
    try {
      await borrarColor(color.id);
      await consultarBD();
    } catch (error) {
      console.log(error);
    }
  };

  const colorValidado = async (colorEditado) => {
    console.log(colorEditado);
  }
  return (
    <div className="my-3">
      <Card style={{ width: "18rem", backgroundColor: color.codigoColor }}>
        <Card.Body>
          <Card.Title>{color.nombreColor}</Card.Title>
          <Card.Text>{color.codigoColor}</Card.Text>
          <Button variant="success" onClick={handleShow}>
            Editar color
          </Button>
          <Button variant="danger" className="mt-2" onClick={botonBorrarColor}>
            Desechar del bolso
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="formularioColores px-5" onSubmit={handleSubmit(colorValidado)}>
            <Form.Group className="mb-3" controlId="formBasicColor">
              <Form.Label>
                Complete los campos con los datos que desea editar del color
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduzca el nombre del color"
                {...register("nombreColor", {
                  required: "El nombre del color es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El mínimo de carácteres debe ser 3",
                  },
                  maxLength: {
                    value: 30,
                    message: "El máximo de carácteres debe ser 30",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.nombreColor?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCodigo">
              <Form.Control
                type="text"
                placeholder="Introduzca el codigo hexadecimal del color"
                {...register("codigoColor", {
                  required: "el código del color es obligatorio",
                  minLength: {
                    value: 7,
                    message: "El mínimo de carácteres debe ser 7",
                  },
                  maxLength: {
                    value: 7,
                    message: "El máximo de carácteres debe ser de 7",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.codigoColor?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              ✨Guardar en el bolso✨
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ColorGuardado;
