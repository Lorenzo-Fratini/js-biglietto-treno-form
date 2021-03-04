var userAge = prompt('Quanti anni hai?');
var travelKm = prompt('Quanti km devi percorrere?');
var priceKm = 0.21;
var price = priceKm * travelKm;
var discount = '';

document.getElementById('age').innerHTML = userAge + ' anni';

document.getElementById('distance').innerHTML = travelKm + 'km';

if (userAge < 18){

  price = (price / 5) * 4;
  discount = '20%';
} else if (userAge >= 65){

  price = (price / 5) * 3;
  discount = '40%';
} else {

  discount = '0%';
}

document.getElementById('discount').innerHTML = discount;

document.getElementById('price').innerHTML = price.toFixed(2) + '€';
