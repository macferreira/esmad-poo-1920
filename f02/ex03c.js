const NUM = 8;

if (checkPrime(NUM)) {
    alert(`O número ${NUM} é primo!`)
} else {
    alert(`O número ${NUM} não é primo!`)
}

function checkPrime(num) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
