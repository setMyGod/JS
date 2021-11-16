
// 1.створити масив з:
// з 5 числових значень
let a = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let b = ["hello", "world", "developer", "strong", "fullstack"];
// - з 5 значень стрічкового, числового та булевого типу
let c = ["hello world",28,36.6,true,"octen"];
// - та вивести його в консоль
console.log(a);
console.log(b);
console.log(c);

//2.Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let d = [];
d[0] = "hello";
d[1] = "world";
console.log(d)

//3. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let k = 0; k < 10; k++ ){
    document.write(`<div>Hello World</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let l = 0; l < 10; l++ ){
    document.write(`<div>Index ${l}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let n = 0;
while (n < 20) {
    n++;
    document.write(`<h1>Any text</h1>`)

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let m = [];
while ( m < 20){
    document.write(`<h1> Произвольный текст и индекс ${m} </h1>`)
    m++
}







//4.- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let massive = [1,2,3,4,5,6,7,8,9,10];
for (j = 0; j < massive.length; j++){
    console.log(massive[j])
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let massive0 = [223,'2',true,false,'213','dsgfsg','dfgdfg',8,false,true];
for (j = 0; j < massive.length; j++){
    console.log(massive0[j])
}


//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let massive1 = ["214","dasd","pipui","oyti","21321","gg","kjj","dsfdsf","xcxz","zddsd122"]
for (i = 0 ; i < massive.length; i++){
    console.log(massive1[i])
}


//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let massive2 = [11,false,22,33,"sadas",true,"asdfasf",99.99,88,true];
for (i = 0; i < massive2.length; i++){
    if (typeof massive2[i] === "boolean"){
        console.log(massive2[i]);
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let massive3 = ['2132','123213213','asdasd','asdasd',true,false,214,546,214,23545]
for (i = 0 ; i <massive3.length; i++){
    if (typeof massive3[i] === 'number'){
        console.log(massive3[i])
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let massive4 = ['hello','world',3,4,5,6,7,8,true,false];
for (i = 0; i < massive4.length; i++){
    if (typeof massive4[i] === 'string'){
        console.log(massive4[i])
    }
}


// 5.Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let massive5 = [];
massive5[0] = true;
massive5[1] = true;
massive5[2] = 44;
massive5[3] = 88;
massive5[4] = true;
massive5[5] = false;
massive5[6] = "text"
massive5[7] = 77;
massive5[8] = true;
massive5[9] = 33;
for(i = 0; i < massive5.length; i++) {
    console.log(massive5[i])
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    for ( i = 0; i < 10; i++){
        console.log(i)
        document.write(i)
    }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    for ( i = 0; i < 100; i++){
        console.log(i)
        document.write(`<div>${i}</div>`)
    }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
    for ( i = 0; i < 200; i+=2){
        console.log(i);
        document.write(`<div>${i}</div>`);

    }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
    for (i = 0; i < 100 ; i++){
        if(i % 2 === 0){
            console.log(i)
            document.write(`<div>${i}</div>`)
        }
    }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    for (i = 0; i < 100 ; i++){
        if(i % 2 !== 0){
            console.log(i)
            document.write(`<div>${i}</div>`)
        }
    }