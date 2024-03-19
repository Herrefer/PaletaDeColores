const urlColores = import.meta.env.VITE_API_COLORES;

export const leerColores = async () => {
  try {
    const respuesta = await fetch(urlColores);
    const listaTareas = await respuesta.json();
    return listaTareas;
  } catch (error) {
    alert(error);
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
    return respuesta;
  } catch (error) {
    alert(error);
  }
};
