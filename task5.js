// 7.5 ООП в ES6

/*

    Задание 5.

    Переписать консольное приложение из предыдущего юнита на классы

*/

class ElectricalAppliances {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isTheDeviceTurnedOn = false;
    }
}

let totalPower = 0;

class ConnectDevice extends ElectricalAppliances {
    constructor(isTheDeviceTurnedOn, power, name) {
        super(name);
        this.isTheDeviceTurnedOn = isTheDeviceTurnedOn;
        this.power = power;
    }

    getConnectionInfo() {
        if (this.isTheDeviceTurnedOn === true) {
            console.log(`The ${this.name} is connected to the socket`); // Прибор подключен к розетке
            totalPower += this.power; // Мощность прибора добавляется к суммарной мощности включенных приборов
        }
    }
}

const deskLamp = new ConnectDevice(true, 50, 'Desk Lamp');
const computer =  new ConnectDevice(false, 320, 'Computer');
const tv = new ConnectDevice(true, 230, 'TV');

deskLamp.getConnectionInfo();
computer.getConnectionInfo();
tv.getConnectionInfo();

console.log(`Total Power of connected appliances = ${totalPower} watt`)