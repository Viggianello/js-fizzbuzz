// programma che stampa i primi numeri da 0 a 100
// for (var num = 0; num < 101 ; num++) {
//     console.log (num);
// }
// programma che stampa i primi numeri da 0 a 100 ma per i multipli di 3 stampi al suo posto Fizz
for (var num = 0; num < 101 ; num++) {

    if (num % 3 != 0) {
        console.log (num);
    }
    else {
        console.log('Fizz');
    }
}
