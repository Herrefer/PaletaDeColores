import { Button, Card } from "react-bootstrap";
import { borrarColorSolicitud, leerColores } from "../helpers/queries";

const ColorGuardado = ({ objetoColor, setColores }) => {
  const borrarColor = async () => {
    try {
      await borrarColorSolicitud(objetoColor._id);
      const listaColores = await leerColores();
      setColores(listaColores);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-3">
      <Card style={{ width: "18rem", background: objetoColor.codigoColor }}>
        <Card.Body>
          <Card.Title>{objetoColor.nombreColor}</Card.Title>
          <Card.Text>{objetoColor.codigoColor}</Card.Text>
          <Button variant="primary">Buscar color</Button>
          <Button variant="danger" className="mt-2" onClick={borrarColor}>
            Desechar del bolso
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ColorGuardado;
