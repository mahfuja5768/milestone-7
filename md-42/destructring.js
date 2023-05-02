const [x , y] = [3, 5];
// console.log(x, y)

const std = {
    name: 'alu',
    age: 20,
    movies: [`'Kill him,'`, `'Din the day'`]

}
const [first, second] = std.movies; /* arry destructring */
// console.log(first, second)


/* obj destructring */

// const {name, age} = {name: 'alu', age:23};
// console.log(name, age)
const {name, age} = {phn:'iphone', name: 'alu', salary:38000, age:23};                                 /* obj destructring */
// console.log(name, age)

/* number to string */
// const num1 = 50;
// console.log(num1);
// const num1string = num1 + '';
// console.log(num1string);

/*  string to number*/
const num1 = '50';
console.log(num1);
const num1string = + num1;
console.log(num1string);