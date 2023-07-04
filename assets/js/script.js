const nomePasseggero = document.getElementById("nameInput");
const distanzaDaPercorrere = document.getElementById("distance");
const etaDelPasseggero = document.getElementById("userAge");

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

const btnLogin = document.querySelector(".pulsante-conferma");

btnLogin.addEventListener("click", function () {

    
  // Codice che verrà eseguito SOLO quando l'utente clicca sul pulsante 
})

const result = price - (price * discount);


