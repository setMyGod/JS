function wakeup (isWorkingDay = true){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        if(isWorkingDay){
            resolve('просыпаюсь')
        }
        else {
            reject('еще сплю')
        }
        },1000)

    })
}
function goEat(eat){
    return new Promise((resolve) => {
       setTimeout(()=>{
           if(eat){
               resolve('Кушаю')
           }

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
    return goEat("Makaroxi")
})
.then(eat =>{
    console.log(eat);
    return goWork()

})
.then(completeTask =>{
    console.log(completeTask)
    return doneMyjob()
})

.then(done =>{
    console.log(done);
    return backtoHome()
})
.then(home=>{
    console.log(home);
})