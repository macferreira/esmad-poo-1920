alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));

function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}
