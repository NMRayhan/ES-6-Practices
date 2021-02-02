// const array = [...document.getElementsByClassName('div')]

// for(let count=0; count< array.length; count++){
//     console.log(array[count]);
// }
// console.log(array.length);

// const article = document.getElementsByClassName('article')
// article[0].style.display = 'none'

const number = [2,3,4,5,6]
const number2 = [4,5,6,7]
const result = number.concat(number2)
console.log(result);
const result2 = result.concat(5,4,5,6,7).concat(number2)
console.log(result2);

// const result4 = [result,result2,number2]
const result4 = [...result, ...result2, ...number2]
console.log(result4);
const Taka = [500,600,350,200,900,650,400]
console.log(Math.max(...Taka));
console.log(Math.min(...Taka));
console.log(Math.floor(...Taka));
console.log(Math.ceil(...Taka));
console.log(Math.log(...Taka));