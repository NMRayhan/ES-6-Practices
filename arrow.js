const CheckNumber = (num1) => {
    if(num1%2==0){
        return `${num1} is Even Number`;
    }else{
        return `${num1} is Odd Number`
    }
}

const result1 = CheckNumber(3);
console.log(result1);


const giveMe5 = () => 5;
const result3 = giveMe5();
console.log(result3);

// const doubleIt = num => num*2

// const doubleIt = function MyNumber(num){
//     return num*2
// }

// function doubleIt(num){
//     return num*2
// }

const doubleIt = num1 => (num1>10) ? 'Greater Then 10' : 'Less then 10'

const result = doubleIt(10)
console.log(result);