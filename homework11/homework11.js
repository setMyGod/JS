// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let div = document.createElement('div');
let form = document.createElement('form');
let inputname = document.createElement('input');
let inputage = document.createElement('input');
let button = document.createElement('button');
form.append(inputname, inputage)
document.body.append(div,button)
div.append(form)
div.style.width = '100px'
button.innerHTML = 'Get it'
button.addEventListener('click',function (){
    localStorage.setItem('name',JSON.stringify(inputname.value))
    localStorage.setItem('age',JSON.stringify(inputage.value))

})

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let cardiv = document.createElement('div');
let carform = document.createElement('form');
let modelinput = document.createElement('input');
let typeinput = document.createElement('input');
let volumeinput = document.createElement('input');
let carbutton = document.createElement('button');
carbutton.innerHTML = 'push form'
carform.append(modelinput,typeinput,volumeinput)
document.body.append(carbutton,carform, cardiv)
cardiv.append(carform,carbutton)
cardiv.style.marginTop = '30px'
carform.style.width = '100px'





carbutton.addEventListener('click',function (){
    localStorage.setItem('model',JSON.stringify(modelinput.value))
    localStorage.setItem('type',JSON.stringify(typeinput.value))
    localStorage.setItem('volume', JSON.stringify(volumeinput.value))


    let mJSON = localStorage.getItem('model');
    let tJSON = localStorage.getItem('type');
    let vJSON = localStorage.getItem('volume');
    // console.log(JSON.parse(mJSON));
    // console.log(JSON.parse(tJSON));
    // console.log(JSON.parse(vJSON));
    let mass =[mJSON,tJSON,vJSON]
    localStorage.setItem('array',mass)


})
