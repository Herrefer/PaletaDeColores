import { Button, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";
import { crearColor, leerColores } from "../helpers/queries";
import { useEffect, useState } from "react";

const FormularioColores = () => {
  const [colores, setColores] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    consultarBD();
  }, []);

  const consultarBD = async () => {
    try {
      const respuesta = await leerColores();
      setColores(respuesta);
    } catch (error) {
      alert(error);
    }
  };

  const colorValidado = async (color) => {
    console.log(color);
    await crearColor(color);
    await consultarBD();
    setColores([...colores, color]);
    reset();
  };

  return (
    <>
      <section className="d-flex align-items-center mb-5 formularioPrincipal">
        <div>
          <img
            className="img-fluid imgFormulario"
            src="../../img/mochila.png"
            alt="varios colores"
          />
        </div>
        <Form
          className="formularioColores px-5"
          onSubmit={handleSubmit(colorValidado)}
        >
          <Form.Group className="mb-3" controlId="formBasicColor">
            <Form.Label>Introduzca los datos del color que desea guardar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca el nombre del color"
              {...register("nombreColor", {
                required: "El nombre del color es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener entre 3 y 30 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El nombre debe tener entre 3 y 30 caracteres",
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
                  message: "El código del color debe tener 7 caracteres",
                },
                maxLength: {
                  value: 7,
                  message: "El código del color debe tener 7 caracteres",
                },
                pattern: {
                  value: /^#[0-9A-Fa-f]{6}$/,
                  message: "El código debe llevar un # al inicio y 6 dígitos que coincidan con un hexadecimal"
                }
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
      </section>
      <ListaColores colores={colores} setColores={setColores} consultarBD={consultarBD}></ListaColores>
    </>
  );
};

export default FormularioColores;
