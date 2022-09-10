// const speed = 200
// const car = {
//     name: "Benz",
//     color: "Black",
//     year: 2017,
//     speed: 180,
//     move() {
//         console.log(`I am going ${this.speed} kmh`);
//     }
// }


// car.move()

class Vehicle {
    constructor(inpName, inpColor) {
        this.name = inpName;
        this.color = inpColor;
    }
    move() {
        console.log("I move")
    }
}

class Car extends Vehicle {
    constructor(inpSpeed) {
        super();
        this.speed = inpSpeed;
    }
    speedGo() {
        console.log(`I am going ${this.speed} kmh`);
    }
}

const car1 = new Car("Benz", "Black", 190);
car1.speedGo();

console.log(car1)

const car2 = new Car("BMW", "white", 170);
car2.speedGo();