
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

    calculateBonus(multiplier) {
        return this.salary * multiplier;
    }
}

module.exports = Employee;

// Local testing
/* const raph = new Employee('Raphael', 90000, 'Ninja');
const donny = new Employee('Donatello', 85000, 'Grasshopper');

console.log(raph.calculateBonus(0.25)); // => 22500
console.log(donny.calculateBonus(0.15)); // => 12750 */
