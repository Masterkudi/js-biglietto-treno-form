const userAge = parseInt(('età del passeggero'));
const distance = parseInt(('distanza da percorrere'));
let pricePerKm = 0.21;
let discount = 0;

let price = pricePerKm * distance;



if (userAge < 18) {
    discount = 0.2;
    console.log('Complimenti, hai uno sconto del 20%');
} 
else if (userAge >= 65) {
    discount = 0.4;
    console.log('Complimenti, hai uno sconto del 40%');
} 
else {
    console.log('Hai il prezzo base');
}

const result = price - (price * discount);

const outputDiv = document.getElementById;

outputDiv.innerHTML = result;