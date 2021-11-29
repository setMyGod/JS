
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'
let n4 = `${n1}, ${n2}, ${n3}`

let name = (string, symbol) => {
    let newArr = [];
    if (string.replace(symbol)) {
        let a = string.split(symbol)
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        console.log(newArr.join(' '))
    }
}
name(n4, '_');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let rand = (length, num) => {
    let newarr = [];
    for (let i = 0; i < length; i++) {
        newarr.push(Math.floor(Math.random() * num));
    }
    return newarr;
};
let result = rand(6, 1000);
console.log(result);

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sortRandom = (length, num) => {
    let emptyArray = [];
    for (let i = 1; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray.sort((a, b) => a - b);
};
console.log(sortRandom(6, 1000));

// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let funcFilter = (length, num) => {
     let emptyArray = [];
     for (let i = 0; i < length; i++) {
         emptyArray.push(Math.floor(Math.random() * num));
   }
     return emptyArray.filter(value => value % 2 === 0);
 };
 console.log(funcFilter(10, 100));
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let func = (dlinna, diap)=>{
    let mass = []
    for (i = 0; i<dlinna;i++){
        mass.push(Math.floor(Math.random()*diap))
    }
    return mass.map(value => value.toString())

}
console.log(func(10, 10));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
let sortNums = (arr, direction) => {
    if (direction === 'bolshe') return arr.sort((a, b) => a - b);
    if (direction === 'menshe') return arr.sort((a, b) => b - a);
};
console.log(sortNums([2,6,8,32,32,-44,214], 'bolshe') );

// - є масив
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(newSort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let newFilter = coursesAndDurationArray.filter((value) => {
    return value.monthDuration > 5;
});
console.log(newFilter)

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    const res = [];
    while (str.length) {
        res.push(str.substr(0, n))
        str = str.slice(n)
    }
    console.log(res)
    return res
};
document.writeln(cutString('Армагедон', 3))

