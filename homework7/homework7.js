// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone){
   this.id = id;
   this.name = name;
   this.surname = surname;
   this.email = email;
   this.phone = phone;

}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arr =[
   new User(12,"Anastasiya","Ananasova",'asdsdd@fdsf.com', 380990006769),
   new User(25,"Kolya","Ananasova",'asdsdd@fdsf.com', 380990006760),
   new User(3,"Vasya","Ananasova",'asdsdd@fdsf.com', 380990006760),
   new User(73,"Denis","Kozlov",'asdsdd@fdsf.com', 380990006760),
   new User(51,"Petya","Vyatochkin",'asdsdd@fdsf.com', 380990006760),
   new User(66,"Jenya","Ananasova",'asdsdd@fdsf.com', 380990006760),
   new User(77,"Anastasiya","Ananasova",'asdsdd@fdsf.com', 380990006760),
   new User(81,"Ivan","Ananasova",'asdsdd@fdsf.com', 380990006760),
   new User(4,"Antonn","Ananasova",'asdsdd@fdsf.com', 380990006760),
   new User(10,"Gavria","Ananasova",'asdsdd@fdsf.com', 380990006760),

]
console.log(arr);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//     залишивши тільки об'єкти з парними id (filter)

arr.filter(User=>{
   if(User.id % 2 ===0){
      console.log(User);
   }
})

// / - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arr.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
   constructor(id,name,surname,email,phone,order) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.phone = phone;
      this.order = order;
   }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let newarr = [
    new Client(92, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`telephone`,`notebook`,`personal computer`,'ball','pencil']),
    new Client(21, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`telephone`,`notebook`,`personal computer`,'clock']),
    new Client(34, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`telephone`]),
    new Client(421, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`book`,`notebook`]),
    new Client(5, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`videogames`]),
    new Client(612, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`telephone`,`notebook`]),
    new Client(7412, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`telephone`,`notebook`]),
    new Client(832, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`notebook`,`personal computer`]),
    new Client(91, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`telephone`]),
    new Client(10, 'Danila', 'Bagrov', 'insd@dasd.ru', 380988681488,[`telephone`,`notebook`]),
]
console.log(newarr);

// Взяти масив Client [] з попереднього завдання.Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortmass = newarr.sort((a, b) => a.order.length - b.order.length);
console.log(sortmass)
