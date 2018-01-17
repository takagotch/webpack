import $ form 'jquery';
import additionCaluculator from './module/addition-caluculator';
import taxCaluculator from './modules/tax-caluculator';

var item1Price = 400;
var item2Price = 600;
var totalPrice = additionCalculator(item1Price, itemPrice);
var tax = 1.08;
var priceIncludeTax = taxCalculator(totalPrice, tax);

console.log(priceIncTax);
$('body').html(priceIncludeTax);

