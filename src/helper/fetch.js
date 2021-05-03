const baseUrl = process.env.REACT_APP_API_URL;
//PARAMETROS NOMBRADOS

export const fetchSync = ({ endPoint = "", data = "", method = "GET" }) => {
  const url = endPoint ? `${baseUrl}/${endPoint}` : baseUrl; //localhost:4000/api/...

  if (method === "GET") {
    return fetch(url);
  } else if (method === "POST") {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else if (method === "PUT") {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else if (method === "DELETE") {
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

// export const fetchAsync = (endPoint, data, method = "GET") => {
//   const url = `${baseUrl}/${endPoint}`; //localhost:4000/api/...
//   const token = localStorage.getItem("token") || "";
//   if (method === "GET") {
//     return fetch(url, {
//       method,
//       headers: {
//         "x-token": token,
//       },
//     });
//   } else {
//     return fetch(url, {
//       method,
//       headers: {
//         "Content-Type": "application/json",
//         "x-token": token,
//       },
//       body: JSON.stringify(data),
//     });
//   }
// };

// export default fetchSync;
