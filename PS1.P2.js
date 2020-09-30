const getOp = inpt => {

    switch(inpt.charAt(1)){
        case '+':
            return (left, right) => left + right; //this is a function
            break;
        case '-':
            return (left, right) => left - right; //this is a function
            break;
        case '*':
            return (left, right) => left * right; //this is a function
            break;
        case '/':
            return (left, right) => left / right; //this is a function
            break;
        case '^':
            return (left, right) => left ** right; //this is a function
            break;
    }
}

const parse = (inpt) => {
    return [inpt.charAt(0),inpt.charAt(2)];
}

const expression = '8*3';
let operator = getOp(expression);
console.log(`${expression} = ${operator(parse(expression)[0],parse(expression)[1])}`)