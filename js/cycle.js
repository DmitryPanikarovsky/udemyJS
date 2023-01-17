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

function firstTask() {
    const arr = [4, 6, 9, 15, 57, 68, 1990];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    return result;
}
firstTask();

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = Math.pow(data[i], 2);
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }
    console.log(data);
    return data;
}
secondTask();

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 0; i < data.length; i++) {
        result[i] = data[(data.length - 1) - i];
    }

    console.log(result);
    return result;
}
thirdTask();