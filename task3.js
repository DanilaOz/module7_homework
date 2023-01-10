// 7.3 Прототип и конструктор объекта

/*

    Задание 3.

    Написать функцию, которая создает пустой объект, но без прототипа

*/

function EmptyObj() {
    const obj = Object.create(null);
    console.log(Object.getPrototypeOf(obj)); // null
}

EmptyObj();