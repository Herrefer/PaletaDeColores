import ColorGuardado from "./ColorGuardado";

const ListaColores = ({ colores, setColores }) => {
  return (
    <>
      <h2 className="text-center">Colores guardados en tu bolso 🎒🎨 </h2>
      <div className="d-flex flex-row justify-content-between flex-wrap">
        {colores.map((elemento) => (
          <ColorGuardado
            key={elemento._id}
            nombreColorProps={elemento.nombreColor}
            codigoColorProps={elemento.codigoColor}
            obejetoColor={elemento}
            setColores={setColores}
          ></ColorGuardado>
        ))}
      </div>
    </>
  );
};

export default ListaColores;
