function simple_interest(p,r,t)
{
    return (p*r*t)/100;
}

function add(si1,si2)
{
    return si1+si2;
}

let si1=simple_interest(1000,2,2); //first simple interest
let si2=simple_interest(2000,2,4); //second simple interest
console.log(`The addition is ${add(si1,si2)}`);