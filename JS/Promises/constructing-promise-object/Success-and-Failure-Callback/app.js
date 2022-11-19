import checkInventory  from './library.js';

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectionValue) => {
  console.log(rejectionValue);
}

checkInventory(order).then(handleSuccess, handleFailure);
