    //1- створити функцію яка обчислює та повертає площу прямокутника висотою
    let sp = function (a, b){
        console.log(a * b)
    }
    sp(30, 30);

    // створити функцію яка обчислює та повертає площу кола
    let sk = function (pi, r) {
        console.log (Math.floor(pi * r**2));
    }
    sk(3.14,12)

    // створити функцію яка обчислює та повертає площу циліндру
    let sc = function (r,h){
        console.log (Math.floor(2*3.14*r*(r+h)))
    }
    sc(20, 32);

    // створити функцію яка приймає масив та виводить кожен його елемент
    let mass = function (arr){
        console.log(arr)
    }
    mass([32,424,23,23])

    // створити функцію яка  створює параграф з текстом. Текст задати через аргумент
    let par = function (text){
        document.write(`<p>${text}</p>`);
    }
    par('hello world')

    // створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    let spisok = function (arg){
        document.write(`<ul>
                            <li>${arg}</li>
                            <li>${arg}</li>
                            <li>${arg}</li>
                        </ul>`)
    }
    spisok("some text here")

    // створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    //     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    let newspisok = function (arr, el) {
        for (i = 0; i < arr; i++) {
            document.write(`<ul><li>${el}</li></ul>`)
        }
    }
    newspisok(3, "new li");

    // створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
    let build = function (mass){
        for (let i = 0; i < mass.length; i++) {
            document.write(`<li>${mass[i]}</li>`)
            
        }

    }
    build(["strings",2,true])

    // створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
    let obj = function (arg){

        for (i = 0; i<arg.length; i++) {
            document.write(`<div>${arg[i].id} ${arg[i].name} ${arg[i].age}</div>`)


        }
    }


    obj([{name:"Vasya", age:33, id:1},{name:"Dimon",age:32, id:2}, {name:"Anastasiya", age:44, id:3}])

        // `<div>${arg[i].name},${arg[i].age}, ${arg[i].id}</div>`