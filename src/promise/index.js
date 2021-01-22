// La promesa es construida dentro de una constante para evitar
// su llamado inmediato
const somethingWillHappen = () => {
  // la Promise recibe dos parametros o dos funciones que realizaran
  // el trabajo si la promesa se resuelve o si esta falla
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Whooops!');
    }
  });
};

// al hacer la invocacion de la promessa esta debe indicarle con
// .then que es lo que sucede si se resuelve
// .catch en caso de que falle
somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 2000);
    } else {
      const error = new Error('Whoops!');
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// como correr varias promesas encadenadas
// uso de promise.all
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log('Array of results', response);
  })
  .catch((err) => {
    console.error(err);
  });
