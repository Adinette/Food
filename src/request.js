export const request = async (url, method, headers, data, dataType = true) => {
 
  return fetch('http://localhost:3000/api/' + url, {
    method: method,
    headers: headers,
    body: dataType ? JSON.stringify(data) : data,
  }).then(res => res.json());
}





