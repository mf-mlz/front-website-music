let url = import.meta.env.VITE_API_URL_REGISTER;

export const registerDataFetch = async (formData) => {
  // Validar que todos los campos estén completos
  const missingField = Object.keys(formData).find((key) => {
    const value = formData[key];
    return value === "" || value === null;
  });

  if (missingField) {
    return {
      type: "error",
      data: `El valor ${missingField} es requerido`,
    };
  }

  const apiUrl = url;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      type: "error",
      data: `Error: Ocurrio Un Error`,
    };
  }
};
