const result = expression => {
    const nums = expression.split('')
    return nums
}

const evaluate = expression => {
    const operator = result(expression)[1]
    switch (operator) {
        case '+':
            return (left, right) => left + right;
        case '-':
            return (left, right) => left - right;
        case '*':
            return (left, right) => left * right;
        case '/':
            return (left, right) => left / right;
        case '^':
            return (left, right) => left ** right;
    }
}

const expression = "2^8";
let operator = evaluate(expression);
let left = parseInt(result(expression)[0])
let right = parseInt(result(expression)[2])
console.log(`${expression} = ${operator(left, right)}`)
