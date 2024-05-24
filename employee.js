
class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
    }
}

module.exports = Employee;

// Local testing
const leo = new Employee('leonardo', 90000, 'Ninja');
console.log(leo);
