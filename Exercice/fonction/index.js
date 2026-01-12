function getMaxNumber(numbers) {
 if (numbers.length === 0) {
 return undefined;
 }
 let maxNumber = numbers[0];
 for (let i = 1; i < numbers.length; i++) {
 if (numbers[i] > maxNumber) {
 maxNumber = numbers[i];
 }
 }
 return maxNumber;
}
const numbers = [15, 8, 23, 4, 42, 10];
const max = getMaxNumber(numbers);
console.log(`Le nombre maximal est : ${max}`);