import { Button, Card } from "react-bootstrap";

const ColorGuardado = () => {
  return (
    <div className="my-3">
      <Card style={{ width: "18rem", background:"#edc56b" }}>
        <Card.Body>
          <Card.Title>Color</Card.Title>
          <Card.Text>#edc56b</Card.Text>
          <Button variant="primary">Buscar color</Button>
          <Button variant="danger" className="mt-2">Eliminar de la bolsa</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ColorGuardado;
