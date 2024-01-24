import ColorGuardado from "./ColorGuardado";

const ListaColores = ({ coloresAgregadosProps, borrarColorProps }) => {
  return (
    <>
    <h2 className="text-center">Colores guardados en tu bolso 🎒🎨 </h2>
      <div className="d-flex flex-row justify-content-between flex-wrap">
        {coloresAgregadosProps.map((elemento, posicionElemento) => (
          <ColorGuardado
            key={posicionElemento}
            codigoColorProps={elemento}
            borrarColorProps={borrarColorProps}
          ></ColorGuardado>
        ))}
      </div>
    </>
  );
};

export default ListaColores;
