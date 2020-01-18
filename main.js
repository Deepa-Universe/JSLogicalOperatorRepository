//Logical Operator

let value1 = 2;
let value2 = 2;

//Addition
let addResult = value1 + value2;
console.log(addResult);

//Multiplication
let multiResult = value1 * value2;
console.log(multiResult);


//AND (&&)
if((addResult === 4) && (multiResult === 4)) //Condition 1 and Condition 2, both are checked 
{
    console.log("AND Operator is satisfied");
}
else
{
    console.log("AND Operator does not work");
}

//OR (||)
if((addResult === 4)||(multiResult === 6))
{
    console.log("OR Operator works when either of it is true");
}
else
{
    console.log("OR Operator does not work");
}


