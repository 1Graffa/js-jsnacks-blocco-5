//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore

// NON mi da
// var bici = [
//   {
//   nome : "bici rossa",
//   peso : 30
//   },
//   {
//   nome : "bici verde",
//   peso : 25
//   }
//   ];
// for(i = 0; i < bici.length; i++){
// console.log(Math.min(bici[i].peso));
// }

//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
//
// var squadre = [
//   {
//   nome : "milan",
//   punti : 0,
//   falli :  0
//   },
//   {
//   nome : "juve",
//   punti : 0,
//   falli : 0
//   },
//   {
//   nome : "inter",
//   punti : 0,
//   falli : 0
//   }
//   ];
//
//   for (var i=0; i < squadre.length; i++){
//     squadre[i].punti = generaRandom(0,30);
//     squadre[i].falli = generaRandom(0,50);
//   }
//   for (var k in squadre){
//   console.log(k,". ",squadre[k]);
//   }
//
// // funzione generaRandom
//   function generaRandom(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) +min;
//   }

//*********************************************

//Jsnack1 - Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10
//Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

// var oggetto = [
//   {
//   nome : "palla",
//   peso : 10
//   }
//   ];
// for (var i = 0; i < oggetto.length; i++){
// oggetto[i].peso = prompt("inserisci peso");
// }
// console.log(oggetto);

//***********************************************

//Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var pugili = [
    {
      nome : "R.Marciano",
      kg : 85,
      cm :  178
    },
    {
      nome : "J.Louis",
      kg : 99,
      cm :  188
    },
    {
      nome : "M.Alì",
      kg : 97,
      cm :  191
    },
    {
      nome : "P.Carnera",
      kg : 110,
      cm :  197
    },
    {
      nome : "R.Graziano",
      kg : 72,
      cm :  170
    },
    {
      nome : "J.LaMotta",
      kg : 76,
      cm :  173
    },
    {
      nome : "S.R.Robinson",
      kg : 78,
      cm :  180
    },
    {
      nome : "S.R.Leonard",
      kg : 70,
      cm :  179
    },
    {
      nome : "M.Tyson",
      kg : 90,
      cm :  178
    },
    {
      nome : "G.Foreman",
      kg : 100,
      cm :  193
    }
    ];

    var totaleKg = 0;
    for (var i=0; i < pugili.length ; i++){
    totaleKg += pugili[i].kg;
    }
    console.log(pugili);
    console.log(totaleKg);
