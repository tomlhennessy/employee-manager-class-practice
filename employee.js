
class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if (manager) {
            manager.addEmployee(this);
        }
    }

    introduce() {
        return `Hi, I'm ${this.name} ${this.lastName}, and I'm ${this.age} years old.`;
    }

    static introducePeople(people) {
        if (!Array.isArray(people)) {
            throw new Error("introducePeople only takes an array as an argument.");
        }

        for (let person of people) {
            if (!(person instanceof Employee)) {
                throw new Error("All items in array must be Person class instances.");
            }
        }

        people.forEach((person) => person.introduce());
    }
}

module.exports = Employee;

/* Local testing
const leo = new Employee('leonardo', 90000, 'Ninja');
console.log(leo); */
