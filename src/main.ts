type Operator = 'ADD' | 'SUBTRACT' | 'DIVIDE' | 'MULTIPLY';

function operate(num1: number, num2: number, operator: Operator): number {
  let result: number
  switch(operator) {
    case 'ADD':
      result = num1 + num2;
      break;
    case 'SUBTRACT':
      result = num1 - num2;
      break;
    case 'DIVIDE':
      result = num1 / num2;
      break;
    case 'MULTIPLY':
      result = num1 * num2;
      break;
    default:
      result = 0;
  }
  return result
}

console.log(operate(1,2, 'ADD'))
console.log(operate(1,2, 'SUBTRACT'))
console.log(operate(1,2, 'DIVIDE'))
console.log(operate(1,2, 'MULTIPLY'))
