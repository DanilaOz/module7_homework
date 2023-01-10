// 7.4 ООП в JS

/*

    Задание 4.

    Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах. 

    Определите иерархию электроприборов. Включите некоторые в розетку.
    Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

    Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
    Выбрав прибор, подумайте, какими свойствами он обладает.

*/

function ElectricalAppliances(name, power) {
    this.name = name, // наименование
    this.power = power, // мощность
    this.isTheDeviceTurnedOn = false; // подключение к розетке. По умолчанию прибор отключен.
}

// Подключение прибора к розетке
ElectricalAppliances.prototype.connectDevice = function() {
    this.isTheDeviceTurnedOn = true; // Прибор подключен
    console.log(`The ${this.name} is connected to the socket`);
}

let totalPower = 0;
// Суммарная потребляемая мощность всех включенных приборов
ElectricalAppliances.prototype.getTotalPower = function(power) {
    if (this.isTheDeviceTurnedOn === true) {
        totalPower += power;
    } 
}

const deskLamp = new ElectricalAppliances('Desk Lamp');
const computer = new ElectricalAppliances('Computer');
const tv = new ElectricalAppliances('TV');

// Подключение приборов к розетке
deskLamp.connectDevice();
computer.connectDevice();
tv.connectDevice();

// Передача аргумента, чтобы посчитать суммарную мощность подключенных приборов
deskLamp.getTotalPower(50);
computer.getTotalPower(320);
tv.getTotalPower(230);

console.log(`Total Power of connected appliances = ${totalPower} watt`)