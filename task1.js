// 7.3 Прототип и конструктор объекта

/*

    Задание 1.

    Написать функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
    только собственных свойств. Данная функция не должна возвращать значение.

*/

const person = {
    surname: "Petrov",
    name: "Ivan",
    status: "Student",
    city: "Moscow"
}

const user = Object.create(person);
user.ownStatus = "Graduate";
user.ownCity = "Perm";

function getObj(user) {
    for (let key in user) {
        if (user.hasOwnProperty(key)) {
            console.log(key + " : " + user[key]);
        }
    }
}

getObj(user);