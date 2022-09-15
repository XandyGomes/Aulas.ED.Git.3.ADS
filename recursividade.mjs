/*
5! = 5 * 4!
4! = 4 * 3!
3! = 3 * 2!
2! = 2 * 1!
*/

function fatorialRec(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * fatorialRec(n - 1)
    }
}

console.log('Fatorial Recursivo de 6: ', fatorialRec(6))