function addtoNumber(num1,num2 = 10){ //by default num2 set is 10 if we miss pass any number when call this function
        // num2 = num2 || 0
    return num1+num2
}

const result = addtoNumber(11,1) //in this Argument if we pass any Value then this Argument value is set in num2
console.log(result);