const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve('Do Something Async'), 3000)
      : reject(new Error('Test Error'));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.log(error);
  }
};

console.log('Before2');
doSomething();
console.log('After2');
