import { Button, Card } from "react-bootstrap";

const ColorGuardado = ({codigoColorProps}) => {
  return (
    <div className="my-3">
      <Card style={{ width: "18rem", background: codigoColorProps }}>
        <Card.Body>
          <Card.Title>Color</Card.Title>
          <Card.Text>{codigoColorProps}</Card.Text>
          <Button variant="primary">Buscar color</Button>
          <Button variant="danger" className="mt-2">Desechar del bolso</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ColorGuardado;
