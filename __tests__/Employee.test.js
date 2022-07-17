const Employee = require('../lib/Employee')

describe("Employee class", () => {
    it ("should be assigned 3 properties and have methods for getting them and the role", () => {
        // create a new instance of the Employee superclass to test the properties and methods to ensure they work
        const employee = new Employee("John", 1, "johnDoe@yahoo.com");

        // testing get methods of super class (tests properties and methods simultaneously)
        expect(employee.getName()).toBe("John");
        expect(employee.getId()).toEqual(1);
        expect(employee.getEmail()).toBe("johnDoe@yahoo.com");

        // testing generic role assignment method for nonspecified roles
        expect(employee.getRole()).toBe("Employee");
    })
})