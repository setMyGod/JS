function wakeup (isWorkingDay = true){
    return new Promise((resolve) => {
        setTimeout(()=>{
            if(isWorkingDay){
                resolve('просыпаюсь',)
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
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('иду на работу')
        },1000)


    })
}

function doneMyjob() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Работаю')
        },1000)


    })
}

function backtoHome (){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('Возвращаюсь домой')
        },1000)
    })
}

wakeup(true)
    .then(morning =>{
        console.log(morning, 'Promise function');
        return goEat()
    })
    .then(eat =>{
        console.log(eat, 'Promise function');
        return goWork()

    })
    .then(workingday =>{
        console.log(workingday, 'Promise function')
        return doneMyjob()
    })

    .then(donemywork =>{
        console.log(donemywork, 'Promise function');
        return backtoHome()
    })
    .then(homeBack=>{
        console.log(homeBack, 'Promise function');
    })

function goodmorning (up, callback){
    setTimeout(()=>{
        if(up){
            console.log('7:30 Подъем', '-CallBAck')
            callback()
        }
        else {
            console.log('Zzz-zzz');
        }
    },7000)

}
goodmorning(true,()=>{
    console.log('8:00 Завтрак','-CallBAck')


})

function rabota (workday, finish){
    setTimeout(()=>{
        if(workday){
            console.log('Работаю на работе','-CallBAck')
            finish()
        }
        else {
            console.log('ушел с работы');
        }
    },8000)
}
rabota(true,()=>{
    fly(true)

})

function fly(egipet){
    if(egipet){

        console.log('засунул синхронную функцию в коллбек, полетел в Египет','-CallBAck');

    }
}




setTimeout(()=>{
    async function teach(){
        const vozvratdomoi = await backtoHome(true);
        const kushat = await goEat(vozvratdomoi);
        console.log(vozvratdomoi, '-=Async function=-')
        console.log(kushat, '-=Async function=-');
    }
    teach()
},10000)

