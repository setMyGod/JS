
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarsS (modelx, manufacturerx, yearx, maxspeedx, volumex){
    this.modelx = modelx
    this.manufacturerx = manufacturerx
    this.yearx = yearx
    this.maxspeedx = maxspeedx
    this.voumex = volumex
    this.drivers = function (){
        console.log(`їдемо зі швидкістю ${maxspeedx} на годину`);
    }
    this.infos = function (){
        console.log(this.modelx, this.manufacturerx, this.yearx, this.maxspeedx, this.voumex);
    }
    this.superspeed = function (upspeed){
        console.log(this.maxspeedx = +upspeed);
    }
    this.newyears = function (supeyears){
        console.log(this.yearx = supeyears);
    }
    this.newdrivers = function (drivers){
        console.log(this.drivers = drivers);

    }





}
let c = new CarsS('X5', 'BMW', 2020, 300, 3.5);
c.drivers()
c.superspeed(380)
c.newyears(2021)
c.newdrivers("Vasya ROgov")
c.infos()
console.log(c);


class Car {
    constructor(model, manufacturer, year, maxspeed, volume) {

        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;

    }
    greeting(){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info(){
        console.log(`Вся інформація: model ${this.model}| manufacturer ${this.manufacturer}| year ${this.year}| maxspeed ${this.maxspeed}| volume ${this.volume}`);
    }
    increaseMaxSpeed(newSpeed){
        console.log((this.maxspeed += newSpeed));
    }
    cangeYear(newYear){
        console.log(this.year = newYear);
    }
    addDriver(driver){
        console.log(this.driver = driver);
    }
}
let car = new Car(2109,'Vaz',1998,200,1.4)
car.greeting()
car.increaseMaxSpeed(50)
car.cangeYear(2001)
car.addDriver("Petro")
car.info()
console.log(car);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

class girl {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }


}
    let girls =[
        new girl('girl1',12,23),
        new girl('girl2',32,32),
        new girl('girl3',16,20),
        new girl('girl4',15,42),
        new girl('girl5',14,36),
        new girl('girl6',53,34),
        new girl('girl7',23,35),
        new girl('girl8',83,31),
        new girl('girl9',15,29),
        new girl('girl 10',53,30),
    ]
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }


}
let prince = new Prince('prince1',33,35)
console.log(girls.find(value => value.size === prince.shoe));
