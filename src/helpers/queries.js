const urlColores = import.meta.env.VITE_API_COLORES;
const urlColor = import.meta.env.VITE_API_COLOR;

export const leerColores = async () => {
    console.log(urlColores)
  try {
    const respuesta = await fetch(urlColores);
    console.log(respuesta)
    const listaTareas = await respuesta.json();
    console.log(listaTareas);
    return listaTareas;
  } catch (error) {
    console.log(error);
  }
};

export const crearColor = async (colorNuevo) => {
  try {
    const respuesta = await fetch(urlColores, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(colorNuevo),
    });
    console.log(respuesta.json());
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarColor = async (id) => {
  try {
    const respuesta = await fetch(`${urlColor}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarColor = async (objetoModificado, id) => {
  try {
    const respuesta = await fetch(`${urlColor}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetoModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
