
/*Il programma dovrà chiedere all'utente:
-il numero di chilometri che vuole percorrere
-l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Queste sono le regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli).
L'output del prezzo finale va stampata in pagina assicurandoci sia leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo).
*/

/*Tools
-const
-prompt
-if/else
-get element by ID
*/

//Creo una const che chiede i chilometri da percorrere con un prompt
const travel_lenght = parseInt(prompt('Quanti km devi percorrere?'));

//Creo una const che chiede l'età del passeggero con un prompt
const user_age = parseInt(prompt('Quanti anni hai?'));

console.log(travel_lenght , user_age);

//Creo una const che calcola il prezzo del biglietto intero
let gross_total =  (travel_lenght * 0.21).toFixed(2);
console.log(gross_total);

//Creo una if/else che calcola il prezzo scontato per gli over 65 o gli under 18
if (user_age <= 18){
    const total_price = ( gross_total - (gross_total * 0.20) ).toFixed(2);
    document.getElementById('totale').innerHTML = (`Il tuo totale è ${total_price} €`) ;
} else if (user_age >= 65){
    const total_price = ( gross_total - (gross_total * 0.40) ).toFixed(2);
    document.getElementById('totale').innerHTML = (`Il tuo totale è ${total_price} €`) ;
} else{

    document.getElementById('totale').innerHTML = (`Il tuo totale è ${gross_total} €`) ;
}
//Stampo il messaggio su HTML 