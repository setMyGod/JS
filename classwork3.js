//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let n = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    //1.перебрати його циклом while
i = 0;
while (i < n.length){
    console.log(n[i])
    i++;
}
// 2. перебрати його циклом for
for(i = 0; i < n.length; i++){
    console.log(n[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 0;
while (i < n.length) {
    if (i % 2 !== 0) {
       document.write(`<div>${n[i]}</div>`);

    }
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for( let i = 0 ; i < n.length; i++){
    if( i % 2 !== 0 ){
     document.write(`<div> ${i}</div>`)
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < n.length){
    if (n[i] % 2 === 0) {

        console.log(n[i]);
    }
    i++;
}
//6. перебрати циклом for та вивести  числа тільки парні  значення

for ( i = 0 ; i < n.length; i++){
    if (n[i] % 2 === 0) {
        console.log(n[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"


for ( i = 0; i < n.length; i++){
    if (n[i] % 3 === 0) {
        n[i] = "hello octen";
        console.log(n[i]);
    }
}

// 8. вивести масив в зворотньому порядку.
for (i = n.length - 1; i >= 0; i--) {
    document.write(`<div>${n[i]}</div>`)
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for ( i = n.length - 1; i>=0; i--){
    console.log(n[i]);
}


i = n.length-1;
while (i >=0) {
    if (i % 2 !== 0) {
    console.log(n[i]);

    }
    i--;
}

for( let i = n.length -1; i >=0; i--){
    if( i % 2 !== 0 ){
        document.write(`<div> ${i}</div>`)
    }
}

i = n.length-1;
while (i >= 0){
    if (n[i] % 2 === 0) {

        console.log(n[i]);
    }
    i--;
}


for ( i = n.length-1 ; i >= 0; i--){
    if (n[i] % 2 === 0) {
        console.log(n[i]);
    }
}

for (i = n.length - 1; i >= 0; i--){
    if(n[i] % 3 === 0){
        n[i] = "hello octen";
        console.log(n[i]);
    }
}
