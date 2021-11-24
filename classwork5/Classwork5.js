    // створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
    let min = (a,b,c) =>{
        if (a < b & a < c) {
            console.log(a)
        }
        else if (b < a & b < c) {
            console.log(b)
        }
        else {
            console.log(c)
        }


}
min(777,888,444)
    // створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
    let max =  (a,b,c) =>{
        if (a > b & a > c) {
            console.log(a)
        }
        else if (b > a & b > c) {
            console.log(b)
        }
        else {
            console.log(c)
        }

    }
    max(222,888,111)

    // створити функцію яка повертає найбільше число з масиву

    let maxnum =  (arr) =>{
        let maximum = arr[0];
        for(i of arr ){
            if (i > maximum){
                maximum = i;
            }
        }
        console.log(maximum)

    }
    maxnum([88888,434,21,32,35,4534,21,2,3214,99999,4324,7547])

    // створити функцію яка повертає найменьше число з масиву
    let minnum =  (arr) =>{
        let minimum = arr[0];
        for(i of arr ){
            if (i < minimum){
                minimum = i;
            }
        }
        console.log(minimum)

    }
    minnum([88888,434,21,32,35,4534,21,2,3214,99999,4324,7547])

    // створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
   let summa =  (arr) =>{
    let newarr = 0;
       for (i of arr) {
           newarr += i;
           console.log(newarr)

       }
   }
   summa([5,6,2])

    // створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

    let averge = (massive)=>{
    let sum = 0 ;
        for(i of massive){
            sum += i ;

        }
        console.log(sum / massive.length);

    }
    averge([2,6,3,8,9,2])

    // створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

    let any = function (arg) {
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
    any([3,2,7,9,23,15])

    // створити функцію яка заповнює масив рандомними числами

    let random = (arr) => {
        let z = []
        for (i = 0; i < arr; i++) {
            z.push(Math.floor(Math.random() * 100));
        }

        console.log(z)
        return z

    };
    random(5)

    // створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
    //     limit - аргумент, який характеризує кінцеве значення діапазону.
    let diap = (limit) => {
        let arr = [0];
        for (i = 0; i < limit; i++) {
            arr.push(Math.floor(Math.random() * limit))
            console.log(arr[i])
        }
    };
    diap(5)

    // Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
    let rev = (arr) => {
        for (let i = arr.length - 1; i >= 0; i--) {
            let element = arr[i];
            console.log(arr[i])

        }

    };
    rev([1,2,3])







