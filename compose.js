
const add = (x = 2) => x + 2;
const multiply = (x = 2) => x * 3;
const divide = (x = 2) => x / 2;


const compose = (...functions) => {
 let prev_result = undefined;
   
 return (val) => {
  prev_result = val;
  const array = [...functions];
  for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    prev_result = element(prev_result);
  }
  return prev_result;
 }

}

const output = compose(add, multiply, divide);
console.log("output:", output(100))
