const baseUrl = " http://localhost:3000/api/";

export async function request(url, method, data) {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const token = localStorage.getItem("token");
  if (token) {
    requestOptions.headers.Authorization = token;
  }

  const response = await fetch(`${baseUrl}${url}`, requestOptions);
  if (!response.ok) {
    console.log(response);
    throw new Error("Erreur lors de la requête");
  }

  return response.json();
}
