// programma che stampa i primi numeri da 0 a 100
// for (var num = 0; num < 101 ; num++) {
//     console.log (num);
// }
// programma che stampa i primi numeri da 0 a 100 ma per i multipli di 3 stampi al suo posto Fizz
// var verifica= parseInt(0);
// var v= verifica;
// Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"
console.log (0 + ' dato che sono un informatico inizio a contare da zero');
for (var num = 1; num < 101 ; num++) {

    if (num % 3 == 0 && num % 15 !=0) { // potrei anche usare questa condizione (num % 3 == 0 && num % 5 !=0)
        console.log('Fizz');
    }
    else if(num % 5 == 0 && num % 15 !=0) {// potrei anche usare questa condizione (num % 3 == 0 && num % 3 !=0)
        console.log('Buzz');
    }

    else if (num % 15 == 0) {// potrei anche usare questa condizione (num % 3 == 0 && num % 5 ==0)
        console.log('FizzBuzz');
    }

    else {
        console.log (num);
    }
}
