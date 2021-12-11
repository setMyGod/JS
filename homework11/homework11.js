// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let form = document.createElement('form');
let name = document.createElement('input');
let age = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'Create object'
age.setAttribute('type', 'number');
name.setAttribute('type', 'string');
document.body.append(form, btn);
form.append(name, age);
btn.onclick = function () {
    localStorage.setItem('mashine', JSON.stringify({MODEL:name.value, YEARS_OLD:age.value}))
};



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.



let forma = document.createElement('form');
let model = document.createElement('input');
let type = document.createElement('input');
let volume = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Save'
forma.append(model, type, volume);
document.body.append(forma,button)
button.onclick = function () {
    let mass = []

    mass.push(model.value,type.value,volume.value)
    console.log(mass);

    localStorage.setItem('cars',JSON.stringify(mass))


};

