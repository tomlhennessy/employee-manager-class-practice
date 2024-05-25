const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager = null) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        const totalSalary = this.salary + this._totalSubSalary();
        return totalSalary * multiplier;
    }

    _totalSubSalary() {
        let sum = 0;
        for (const employee of this.employees) {
            sum += employee.salary;
            if (employee instanceof Manager) {
                sum += employee._totalSubSalary();
            }
        }
        return sum;
    }
}

module.exports = Manager;

// Local testing
const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Ninja', raph);
const donnie = new Employee('Donatello', 85000, 'Ninja', raph);


console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
