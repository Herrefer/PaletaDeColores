import { Button, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";
import { crearColor, leerColores } from "../helpers/queries";
import { useEffect, useState } from "react";
const FormularioColores = () => {
  
  const [colores, setColores] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  useEffect(()=>{
    consultarBD()
  }, [])

  const consultarBD = async () => {
    try{
      const respuesta = await leerColores();
      setColores(respuesta);
    }catch(error){
      alert(error);
    }
  }

 

  const colorValidado = async (color) => {
    console.log(color);
    crearColor(color);
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
            <Form.Label>Introduzca un color por código hexadecimal</Form.Label>
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
      </section>
      <ListaColores colores ={colores} setColores={setColores}></ListaColores>
    </>
  );
};

export default FormularioColores;
