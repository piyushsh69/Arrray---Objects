const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const isAlergicToHoney = true;

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

if (isAlergicToHoney) {
    let indexOfHoney = shoppingCart.indexOf("Honey");
    shoppingCart.splice(indexOfHoney, 1);
}

let indexOfTea = shoppingCart.indexOf('Tea');
shoppingCart[indexOfTea] = 'Green Tea'

console.log(shoppingCart);