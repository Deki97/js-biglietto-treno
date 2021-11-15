// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// FASE DI INSERIMENTO DATI DA PARTE DELL'UTENTE
// Richiesta numero chilometri da percorrere da parte dell'utente
const numeroChilometri = parseInt( prompt("Inserisci il numero di chilometri che vuoi percorrere:") );
// console.log(numeroChilometri);

// Richiesta dell'età del passeggero da parte dell'utente
const etàPasseggero = parseInt( prompt("Inserisci l'età del passeggero:") );
// console.log(etàPasseggero);

// Definisco la variabile che contiene il prezzo per chilometro
const prezzoPerChilometro = 0.21;

// Definisco le variabili prezzoBigliettoIntero, sconto e il prezzoFinaleBiglietto
let prezzoBigliettoIntero;
let sconto;
let prezzoFinaleBiglietto;


// LOGICA
// Se passeggero minorenne
if ( etàPasseggero > 0 && etàPasseggero < 18) {
    prezzoBigliettoIntero = (numeroChilometri * prezzoPerChilometro);
    sconto = (prezzoBigliettoIntero * 0.2);
    prezzoFinaleBiglietto = prezzoBigliettoIntero - sconto;
    // console.log(prezzoFinaleBiglietto);
} 
// Se passeggero over 65
else if ( etàPasseggero > 65) {
    prezzoBigliettoIntero = (numeroChilometri * prezzoPerChilometro);
    sconto = (prezzoBigliettoIntero * 0.4);
    prezzoFinaleBiglietto = prezzoBigliettoIntero - sconto;
    // console.log(prezzoFinaleBiglietto);
} 
// Se passeggero con età compresa tra 18 e 65 inclusi
else {
    prezzoBigliettoIntero = (numeroChilometri * prezzoPerChilometro);
    prezzoFinaleBiglietto = prezzoBigliettoIntero;
    // console.log(prezzoFinaleBiglietto);
}



// OUTPUT
alert("Il prezzo totale in base ai chilometri da percorrere ed età del passeggero risulta: " + prezzoFinaleBiglietto.toFixed(2) + "€");