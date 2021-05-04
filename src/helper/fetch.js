const baseUrl = process.env.REACT_APP_API_URL;
//PARAMETROS NOMBRADOS

export const fetchSync = ({ endPoint = "", data = "", method = "GET" }) => {
  const url = endPoint ? `${baseUrl}/${endPoint}` : baseUrl; //localhost:4000/api/...

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};
const fetching = {
  fetchSync,
};
export default fetching;
