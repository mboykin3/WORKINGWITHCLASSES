class Person {
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

module.exports = Person
