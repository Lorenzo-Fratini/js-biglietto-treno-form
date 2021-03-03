var userAgeStr = prompt('Quanti anni hai?');
var travelKmStr = prompt('Quanti km devi percorrere?');

var userAge = parseInt(userAgeStr);
var travelKm = parseInt(travelKmStr);

document.getElementById('age').innerHTML = userAge + ' anni';

document.getElementById('distance').innerHTML = travelKm + 'km';

if (userAge < 18){

  var price = ((0.21 * travelKm) / 5) * 4;

  document.getElementById('discount').innerHTML = '20%';

} else if (userAge >= 65){

  var price = ((0.21 * travelKm) / 5) * 3;

  document.getElementById('discount').innerHTML = '40%';
} else {

  var price = (0.21 * travelKm);

  document.getElementById('discount').innerHTML = '0%';
}

document.getElementById('price').innerHTML = price.toFixed(2) + '€';
