import ColorGuardado from "./ColorGuardado";

const ListaColores = ({coloresAgregadosProps}) => {
  return (
    <div className="d-flex flex-row justify-content-between flex-wrap">
        {
            coloresAgregadosProps.map((elemento, posicionElemento)=> <ColorGuardado key={posicionElemento} codigoColorProps={elemento}></ColorGuardado>)
        }
    </div>
  );
};

export default ListaColores;
