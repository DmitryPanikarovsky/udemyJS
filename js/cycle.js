"use strict";

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);


// for (let num = 0; num <=10; num++) {
//     console.log(num);
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
//     for (let j = 0; j < 5; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const lenght = 24;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '///';
//     }
//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k == 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }
// for (let i = 20; i >=10; i--) {
//     console.log(i);
//     if (i === 13) break;
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 1) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же;
// arr[0], arr[1];

// function firstTask() {
//     const arr = [4, 6, 9, 15, 57, 68, 1990];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
//     return result;
// }
// firstTask();

// // Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// // Для определения типа данных используйте typeof();

// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = Math.pow(data[i], 2);
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);
//     return data;
// }
// secondTask();

// // Разверните массив data наоборот при помощи цикла и запишите данные в массив result.

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[(data.length - 1) - i];
//     }

//     console.log(result);
//     return result;
// }
// thirdTask();

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
// P.S. возвращать - это использовать ключевое слово return.
// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

function sayHello(name) {
    console.log(`Привет, ${name}!`);
    return;
}
sayHello('Alex');


// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: 
// одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

function returnNeighboringNumbers(num) {
    console.log([num - 1, num, num + 1]);
    return;
}
returnNeighboringNumbers(10);


// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько 
// раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку 
// (или число в особых случаях, о которых ниже), 
// где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать 
// логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, 
// а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае 
// на фронтенде.

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if ( i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    console.log(str);
    return;
}
getMathResult(15, 15);

///////////////////////////////////////////

const usdCurr = 30;
const discount = 0.9;

function convert(curr, amount){
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(usdCurr, 500);

promotion(res);


const logg = 'Hello, World';
console.log(logg.slice(7, 12));
