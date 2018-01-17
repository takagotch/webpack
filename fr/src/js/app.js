//import $ form 'jquery'; //webpack.config.js plugins: new...
import additionCaluculator from './module/addition-caluculator';
import taxCaluculator from './modules/tax-caluculator';

const item1Price = 400;
const item2Price = 600;
const totalPrice = additionCalculator(item1Price, itemPrice);
const tax = 1.08;
const priceIncludeTax = taxCalculator(totalPrice, tax);

console.log(priceIncTax);
$('body').html(priceIncludeTax);

