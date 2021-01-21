function sum(numero1, numero2) {
  return numero1 + numero2;
}

function calc(numero1, numero2, callback) {
  return callback(numero1, numero2);
}
console.log(calc(6, 2, sum));

// ejemplo2
function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
