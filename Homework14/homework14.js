function wakeup (isWorkingDay = true){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        if(isWorkingDay){
            resolve('просыпаюсь')
        }

        },1000)

    })
}
function goEat(){
    return new Promise((resolve) => {
       setTimeout(()=>{

               resolve('Кушаю')


       },1000)
    });
}
function goWork(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('иду на работу')
        },1000)


    })
}

function doneMyjob() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Работаю')
        }, 1000)


    })
}

function backtoHome (){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('Возвращаюсь домой')
        }, 1000)
    })
}

wakeup(true)
.then(morning =>{
    console.log(morning);
    return goEat()
})
.then(eat =>{
    console.log(eat);
    return goWork()

})
.then(workingday =>{
    console.log(workingday)
    return doneMyjob()
})

.then(donemywork =>{
    console.log(donemywork);
    return backtoHome()
})
.then(homeBack=>{
    console.log(homeBack);
})