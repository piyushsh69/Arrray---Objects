const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Min & Max

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log('min:', minAge);
console.log('max:', maxAge);

// Median

const medianIndex = Math.floor(ages.length / 2);
let median;
if (ages.length % 2 == 0) {
    median = ((ages[medianIndex] + ages[medianIndex + 1]) / 2);
} else {
    median = (ages[medianIndex] / 2);
}
console.log('median:', median);

// Average

const sumOfAges = ages.reduce((curr, acc)=> curr + acc, 0)
const average = sumOfAges / ages.length;
console.log('average:', average);

// Range

const range = maxAge - minAge;
console.log('range:', range);

