// 7.3 Прототип и конструктор объекта

/*

    Задание 2.

    Написать функцию, которая принимает в качестве аргумента строку и объект, а затем проверяет есть ли
    у переданного объекта свойство с данным именем. Функция должны возвращать true или false.

*/

function searchProperties(str, person) {
    return (str in person);
}

const person = {
    surname: "Petrov",
    name: "Ivan",
    status: "Student",
    city: "Moscow"
}

console.log(searchProperties('name', person)); // true
console.log(searchProperties('age', person)); // false