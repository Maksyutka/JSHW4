let firstFraction = {
    numerator: 5,
    denominator: 7,
}

let secondFraction = {
    numerator: 6,
    denominator: 8,
}

let generalDenominator = firstFraction.denominator * secondFraction.denominator;

function addition() {
    return (firstFraction.numerator * secondFraction.denominator + secondFraction.numerator * firstFraction.denominator) + "/" + generalDenominator;
}

alert(addition());

function subtraction() {
    return (firstFraction.numerator * secondFraction.denominator - secondFraction.numerator * firstFraction.denominator) + "/" + generalDenominator;
}

alert(subtraction());

function multiplication() {
    return firstFraction.numerator * secondFraction.numerator + "/" + firstFraction.denominator * secondFraction.denominator;
}

alert(multiplication());

function division() {
    return firstFraction.numerator * secondFraction.denominator + "/" + firstFraction.denominator * secondFraction.numerator;
}

alert(division());

function abbreviation(a = secondFraction.numerator, b = secondFraction.denominator) {
    let maxLength;
    if (a > b) {
        maxLength = b;
    } else {
        maxLength = a;
    }

    let maxDivider;

    for (let i = 1; i <= maxLength; i++) {
        if (a % i == 0 && b % i == 0) {
            maxDivider = i;
        }
    }

    let result = (a / maxDivider + "/" + b / maxDivider);
    return result;
}

alert(abbreviation());