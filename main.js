// programma che stampa i primi numeri da 0 a 100
// for (var num = 0; num < 101 ; num++) {
//     console.log (num);
// }
// programma che stampa i primi numeri da 0 a 100 ma per i multipli di 3 stampi al suo posto Fizz
// var verifica= parseInt(0);
// var v= verifica;
console.log (0 + ' dato che sono un informatico inizio a contare da zero');
for (var num = 1; num < 101 ; num++) {

    if (num % 3 == 0 && num % 15 !=0) {
        console.log('Fizz');
    }
    else if(num % 5 == 0 && num % 15 !=0) {
        console.log('Buzz');
    }

    else if (num % 15 == 0) {
        console.log('FizzBuzz');
    }

    else {
        console.log (num);
    }
}
