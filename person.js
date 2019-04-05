class Employee {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(newLastName) {
        this.lastName = newLastName;
    }
    get lastName() {
        return this.lastName;
    }
    set age(newAge) {
        if (!isNaN(newAge)) {
            this.age = newAge;
        }
        else {
            this._age = 30;
        }
    }
    get age() {
        return this._age;
    }
}

var employee1 = new Employee('Barndon', 'Smith', 47);
var employee2 = {
    _firstName: 'Laura',
    _lastName: 'Long',
}

console.log(`${employee1.firstName} is ${employee1.age}`)
employee1._firstName = 'Brent';
employee1._age = 'Forty-Seven';

function Log(a) {
    console.log(a);
}

console.log(employee1);
console.log(employee2);

console.log(employee1 instanceof Object);

