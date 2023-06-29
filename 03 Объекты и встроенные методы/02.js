// Простые объекты с данными
//Объект представляет собой набор значений в соответствии "Ключ: Значение"
const developer = {
  name: "Sergey",
  surname: "Sergeevich",
  age: 39,
  skills: ["JavaScript","HTML","CSS"],
  isMaried: true,
  addAge() {
    this.newAge++;
  },
  getMaried() {
    this.isMaried = true;
  },
  getDivorced() {
    this.isMaried = false;
  },
}
// перезаписывание  значений объекта

developer.isMaried = false;

// удаление значений
delete developer.age

// добавление значений
developer.newAge = 40;

// оператор in проверяет наличие ключа в объекте

console.log("name" in developer);
console.log("age" in developer);

//обход бъекта циклом for in
 for (let prop in developer) {
  console.log(prop, developer[prop]);
}

//обход массива циклом for of
const numbers = [1,2,3,4,5];
for (let number of numbers ) {
 console.log(number);
}

//обращение к значениям объекта
console.log(developer.skills);
console.log(developer['name']);

// методы объета
developer.addAge();
console.log(developer['newAge']);