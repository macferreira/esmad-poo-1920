let checkPerfect = function (num) {
    let temp = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            temp += i;
        }
    }
    if (temp === num && temp !== 0) {
        return true;
    } else {
        return false;
    }
}

let result;
do {
    const num = +prompt("Numero: ");
    result = checkPerfect(num);
} while (!result);
