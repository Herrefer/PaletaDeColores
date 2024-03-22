import ColorGuardado from "./ColorGuardado";

const ListaColores = ({ colores, setColores, consultarBD }) => {
  return (
    <>
      <h2 className="text-center">Colores guardados en tu bolso 🎒🎨 </h2>
      <div className="d-flex flex-row justify-content-between flex-wrap">
        {colores.map((color)=> <ColorGuardado key={color._id} color={color} setColores={setColores} colores={colores} consultarBD={consultarBD}></ColorGuardado>)}
      </div>
    </>
  );
};

export default ListaColores;
