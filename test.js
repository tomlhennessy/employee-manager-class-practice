const Employee = require('./employee');
const Manager = require('./manager');

// company structure
const hobbes = new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

// test calculations
console.log(hobbes.calculateBonus(0.05)); // Expected: 70500
console.log(calvin.calculateBonus(0.05)); // Expected: 20500
console.log(susie.calculateBonus(0.05)); // Expected: 14000
console.log(lily.calculateBonus(0.05)); // Expected: 4500
console.log(clifford.calculateBonus(0.05)); // Expected: 4500
