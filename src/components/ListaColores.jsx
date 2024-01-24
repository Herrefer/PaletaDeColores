import ColorGuardado from "./ColorGuardado";

const ListaColores = ({coloresAgregadosProps, borrarColorProps}) => {
  return (
    <div className="d-flex flex-row justify-content-between flex-wrap">
        {
            coloresAgregadosProps.map((elemento, posicionElemento)=> <ColorGuardado key={posicionElemento} codigoColorProps={elemento} borrarColorProps={borrarColorProps}></ColorGuardado>)
        }
    </div>
  );
};

export default ListaColores;
