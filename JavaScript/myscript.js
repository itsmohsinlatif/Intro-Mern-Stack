console.log("External file Script");
//JS is loose type language
var x = 5;
var y = 34;

console.log(x + y);
console.log(x - y);

function product(a, b)
{
    return a * b;
}

console.log(product(x, y));

function divide(a, b)
{
    return(a / b);    
}
console.log(divide(y, x));

function remainder(a, b)
{
    return(a % b);
}

console.log(remainder(x, y));

var z = divide;
console.log(divide);