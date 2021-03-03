var userAge = prompt('Quanti anni hai?');
var travelKm = prompt('Quanti km devi percorrere?');

// console.log(userAge, travelKm);

document.getElementById('age').innerHTML = userAge + ' anni';

document.getElementById('distance').innerHTML = travelKm + 'km';

if (userAge < 18){

  var price = ((0.21 * travelKm) / 5) * 4;

  // console.log(price);

  document.getElementById('discount').innerHTML = '20%';

} else if (userAge >= 65){

  var price = ((0.21 * travelKm) / 5) * 3;

  // console.log(price);

  document.getElementById('discount').innerHTML = '40%';
} else {

  var price = (0.21 * travelKm);

  // console.log(price);

  document.getElementById('discount').innerHTML = '0%';
}

document.getElementById('price').innerHTML = price.toFixed(2) + '€';
