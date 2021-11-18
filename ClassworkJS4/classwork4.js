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
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
abc = [4,5,8,9]
function midle ( arg ){
    let sum = 0;
    for (i of arg) {
        sum+=i;
    }
    return Math.floor(sum / arg.length);
}

console.log(midle(abc));

