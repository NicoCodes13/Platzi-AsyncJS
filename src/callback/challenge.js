// objeto para realizar las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

// encargada de traer la informacion y llmar el callback
function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  //   abrir una URL o hacer su llamado
  xhttp.open('GET', url_api, true);
  // escuchar el elemento ante cambios
  xhttp.onreadystatechange = function (event) {
    // funcion donde recibe el evento
    // mas info en
    // https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
    // xhttp.readyState recibe el valor numerico del estado
    if (xhttp.readyState === 4) {
      // este if revisara su status para ver si fue finalizado bien
      if (xhttp.status === 200) {
        // El callback sigue el estandar de (error, informacion)
        // el parse(xhttp.responseText) permite transformar
        // el string recibido en un archivo tipo JSON para su uso
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // genera un error con la funcion propia de JS
        const error = new Error('Error' + url_api);
        return callback(error, null);
      }
    }
  };
  //   envio de la solicitud
  xhttp.send();
}

// empezando el llamado de datos
fetchData(API, (error1, data1) => {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
