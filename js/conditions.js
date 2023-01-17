const NUM = 50;

if (NUM < 49) {
    console.log(Error);
} else if (NUM > 100) {
    console.log('Много!');
} else {
    console.log('Ok!');
}

(NUM === 50) ? console.log('Ok!') : console.log('er');

const num = 50;

switch (num) {
    case 49: 
        console.log('No!');
        break;
    case 100: 
        console.log('No!');
        break;
    case 54: 
        console.log('Yes!');
        break;
    default: 
        console.log('No here');
        break;
}