// console.log ("Hello World")


let userFlavors = prompt("Enter Your Order");


let flavorsArray = userFlavors.split(',');

const order = {
    vanilla: 0,
    coffee: 0,
    strawberry: 0,

}

for (let i = 0; i < flavorsArray.length; i++) {
    if(flavorsArray[i] === "vanilla") {
        order.vanilla++;
    }
    if(flavorsArray[i] === "coffee") {
        order.coffee++;
    }
    if (flavorsArray[i] === "strawberry") {
        order.strawberry++;
    }
0    
}

console.table(order);