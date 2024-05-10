import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueldecreses() {
        let fuel = this.fuel - 75;
        this.fuel;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueldecreses() {
        let fuel = this.fuel - 75;
        this.fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Sadaf", "Erum", "Sadia"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
if (opponent.select === "Sadaf") {
    console.log(`${p1.name} Vs ${o1.name}`);
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt1",
        message: "Select your option",
        choices: ["Attack", "Drink", "Dead"]
    });
    if (ask.opt1 == "Attack") {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num > 0) {
            p1.fueldecreses();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
        }
        if (num <= 0) {
            o1.fueldecreses();
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            console.log(`${p1.name} fuel is ${p1.fuel}`);
        }
    }
    if (ask.opt1 == "Drink") {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num > 0) {
            p1.fueldecreses();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
        }
        if (num <= 0) {
            o1.fueldecreses();
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            console.log(`${p1.name} fuel is ${p1.fuel}`);
        }
    }
    if (ask.opt1 == "Dead") {
        console.log("You loose this game. Try again");
    }
}
//erum
if (opponent.select === "Erum") {
    console.log(`${p1.name} Vs ${o1.name}`);
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt1",
        message: "Select your option",
        choices: ["Attack", "Drink", "Dead"]
    });
    if (ask.opt1 == "Attack") {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num > 0) {
            p1.fueldecreses();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
        }
        if (num <= 0) {
            o1.fueldecreses();
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            console.log(`${p1.name} fuel is ${p1.fuel}`);
        }
    }
    if (ask.opt1 == "Drink") {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num > 0) {
            p1.fueldecreses();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
        }
        if (num <= 0) {
            o1.fueldecreses();
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            console.log(`${p1.name} fuel is ${p1.fuel}`);
        }
    }
    if (ask.opt1 == "Dead") {
        console.log("You loose this game. Try again");
    }
    //Sadia
    if (opponent.select === "Sadia") {
        console.log(`${p1.name} Vs ${o1.name}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt1",
            message: "Select your option",
            choices: ["Attack", "Drink", "Dead"]
        });
        if (ask.opt1 == "Attack") {
            let num = Math.floor(Math.random() * 2 + 1);
            if (num > 0) {
                p1.fueldecreses();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (num <= 0) {
                o1.fueldecreses();
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                console.log(`${p1.name} fuel is ${p1.fuel}`);
            }
        }
        if (ask.opt1 == "Drink") {
            let num = Math.floor(Math.random() * 2 + 1);
            if (num > 0) {
                p1.fueldecreses();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (num <= 0) {
                o1.fueldecreses();
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                console.log(`${p1.name} fuel is ${p1.fuel}`);
            }
        }
        if (ask.opt1 == "Dead") {
            console.log("You loose this game. Try again");
        }
    }
}
