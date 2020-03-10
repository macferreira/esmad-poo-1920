/*
Calculate leap year:
(1) If the year is evenly divisible by 4, go to step 2. ...
(2) If the year is evenly divisible by 100, go to step 3. ...
(3) If the year is evenly divisible by 400, go to step 4. ...
(4) The year is a leap year (it has 366 days).
(5) The year is not a leap year (it has 365 days).
*/
let checkLeapYear = function (year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

alert(checkLeapYear(2000));
alert(checkLeapYear(2019));
alert(checkLeapYear(2016));
