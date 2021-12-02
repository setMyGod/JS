//
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

//     a. заповнити його 50 парними числами за допомоги циклу.
let a = []
for (i = 1; i < 50; i++) {
    a.push(Math.floor(Math.random()))
    if (i % 2 == 0) {
        console.log(i);
    }
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
let b = []
for (i = 1; i < 50; i++) {
    b.push(Math.floor(Math.random()))
    if (i % 2 != 0) {
        console.log(i);
    }
}
// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let random = (arr) => {
    let z = []
    for (i = 0; i < arr; i++) {
        z.push(Math.floor(Math.random() * 888));
    }

    console.log(z)
    return z

};
random(20)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
function randomNumber(min, max){
    x = [];
    for (i=0; i<x.length; i++){
        console.log(x.push(Math.floor(Math.random() * (max - min) + min)));
    }


}

(randomNumber(8, 732));