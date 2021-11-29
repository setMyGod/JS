
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarsS (model, manufacturer, year, maxspeed, volume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;







console.log(new CarsS('X5', 'bmw', 2020, 280, 3));


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