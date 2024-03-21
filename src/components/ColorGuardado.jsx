import { Button, Card } from "react-bootstrap";
import { borrarColor, leerColores } from "../helpers/queries";

const ColorGuardado = ({ color, setColores, colores, consultarBD }) => {
  const botonBorrarColor = async () => {
    try {
      await borrarColor(color.id);
      await consultarBD();
    } catch (error) {
      console.log(error);
    }
  };

  const botonEditarColor = () => {
    try {
      console.log("este es el botón para editar");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-3">
      <Card style={{ width: "18rem", backgroundColor: color.codigoColor }}>
        <Card.Body>
          <Card.Title>{color.nombreColor}</Card.Title>
          <Card.Text>{color.codigoColor}</Card.Text>
          <Button variant="success" onClick={botonEditarColor}>
            Editar color
          </Button>
          <Button variant="danger" className="mt-2" onClick={botonBorrarColor}>
            Desechar del bolso
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ColorGuardado;
