function sum(num1: number, num2: number) {
  const result = num1 + num2;
  console.log(`sum of ${num1} and ${num2} = ${result}`);
}
function subtraction(num1: number, num2: number) {
  const result = num1 - num2;
  console.log(`subtraction of ${num1} and ${num2} = ${result}`);
}
function multiplication(num1: number, num2: number) {
  const result = num1 * num2;
  console.log(`multiplication of ${num1} and ${num2} = ${result}`);
}
function division(num1: number, num2: number) {
  const result = num1 / num2;
  console.log(`division of ${num1} and ${num2} = ${result}`);
}
export { sum, subtraction, multiplication, division };
