//   map method in js

const numbers = [1, 2, 3, 4];
mynum = numbers.map((num) => num * 2);
console.log(mynum);
mynum[1] = 10;
console.log(mynum);

// js fillter method

const myfavoriteNumbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumber = myfavoriteNumbers.filter(num => num % 2 ===0)
console.log(`this is even number ${evenNumber}`)

// js reduce method
const addnum = [20, 30, 60, 80];
const add = addnum.reduce((acc, current) => acc + current, 0);
console.log(add);


// product display = map()
// product filter = filter()
// product total price = reduce()

