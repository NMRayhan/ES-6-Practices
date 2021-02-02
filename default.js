function addtoNumber(num1,num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1+num2
}

const result = addtoNumber(11)
console.log(result);