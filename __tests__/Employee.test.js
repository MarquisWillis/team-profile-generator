const Employee = require('../lib/Employee')

describe("Employee class", () => {
    it ("should be assigned 3 properties and have methoods for getting them and the role", () => {
        const employee = new Employee("John", 1, "johnDoe@yahoo.com");

        expect(employee.getName()).toBe("John");
        expect(employee.getId()).toEqual(1);
        expect(employee.getEmail()).toBe("johnDoe@yahoo.com");

        expect(employee.getRole()).toBe("Employee");
    })
})