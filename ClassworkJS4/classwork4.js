// 1.створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numbers(a, b, c) {
    if (a < b && a < c) {
        document.write(a);
    }
    else if (b < a && b < c) {
        document.write(b);
    }
    else {
        document.write(c);
    }
}
numbers(22,14,61);

// 2.створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numbers1(a, b, c) {
    if (a > b && a > c) {
        document.write(a);
    }
    else if (b > a && b > c) {
        document.write(b);
    }
    else {
        document.write(c);
    }
}

numbers1(14, 88, 33);
//3. створити функцію яка повертає найбільше число з масиву
let maxnum = [11, 4324, 233, 4424, 452, 6621, 7777, 8888, 2319];
function maxnumbers (argument) {
    let max = argument[0];
    for ( i of argument ) {
        if( i > max )   {
            max = i;
        }
    }
    document.write(`<div>${max}</div>`);
}

maxnumbers(maxnum);

//4.створити функцію яка повертає найменьше число з масиву
let minnum = [9595,2138,213,43,21];
function  minnumbers (argument1){
    let min = argument1[0];
    for (i of argument1) {
        if (i < min) {
            min = i;
        }
    }
    document.write(`<div>${min}</div>`)
}
minnumbers(minnum)
//5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад [1,2,10]->13
let summa = [496,496,496];
function sumnum (argument){
    let sum = 0;
    for (i of argument) {

        sum = i + sum;
    }
    return sum;
}
document.write(sumnum(summa))
//6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
abc = [4,5,8,9,7396]
function midle ( arg ){
    let sum = 0;
    for (i of arg) {
        sum+=i;
    }
    return Math.floor(sum / arg.length);
}

console.log(midle(abc));


//7.створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax(arg) {
    let min = arguments[0];
    let max = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log("max ", max);
    return min;
}
document.write('Мінімальне число з введених: ' + minMax(100, 20, 3, 100, 2021))

// 8. створити функцію яка заповнює масив рандомними числами

let z = [];
function random(arg){
    for (i = 0; i < arg; i++) {
        z.push(Math.floor(Math.random()*100));
    }
    return z;
}
document.write(random(12))

// 9.Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1]

let arr = [];
function reverse(arr) {

    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        arr[ri] = arr[i];
    }

    return arr;

}
reverse([1,2,3]);